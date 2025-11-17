import * as React from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
                        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        "bg-transparent",
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";

export default function MainNavbar() {

    return (
        <header className="relative bg-transparent z-50 w-full transition-colors duration-300 mb-10">
            <div className="container mx-auto flex h-26 items-center justify-between px-4 lg:px-14">
                <div className="flex items-center space-x-6">
                    <Link href="/" rel="alternate" className="flex items-center space-x-2 pr-10">
                        <Image
                            src="/images/logo_for_dark_mode.svg"
                            alt="Dark Logo"
                            width={120}
                            height={60}
                            className="w-26 h-15 object-contain bg-transparent hidden lg:block"
                            style={{width: "auto", height: "auto"}}
                        />
                    </Link>
                    <NavigationMenu className="border border-gray-150 rounded-full bg-white/10">
                        <NavigationMenuList className="px-10">
                            <NavigationMenuItem className="px-2.5">
                                <NavigationMenuLink
                                    rel="alternate"
                                    href="#Home"
                                    className="hover:cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary text-white"
                                >
                                    Home
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="px-2.5">
                                <NavigationMenuLink
                                    rel="alternate"
                                    href="#About"
                                    className="hover:cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary text-white"
                                >
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="px-2.5">
                                <NavigationMenuLink
                                    rel="alternate"
                                    href="#Services"
                                    className="hover:cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary text-white"
                                >
                                    Services
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem className="px-2.5">
                                <NavigationMenuLink
                                    rel="alternate"
                                    href="#Terms & Conditions"
                                    className="hover:cursor-pointer text-gray-700 dark:text-gray-200 hover:text-primary text-white"
                                >
                                    Terms & Conditions
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="text-white">+375335256894</div>
                    <div className="text-white">|</div>
                    <div className="text-white">Help Centre</div>
                </div>
            </div>
        </header>
    );
}

