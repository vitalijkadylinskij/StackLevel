import React from "react";
import {Facebook, Linkedin, Twitter} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {

    return (
        <footer
            className="w-full container glow-bottom pt-30 px-4 w-full lg:px-14 h-full mx-auto">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">

                    <div className="space-y-2">
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
                        <p className="text-gray-400 text-sm">Technology AI Generator Website</p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Explore</h4>
                        <ul className="space-y-2">
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors text-sm">Resources</a>
                            </li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors text-sm">Documents</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Menu</h4>
                        <ul className="space-y-2">
                            <li><a href="/"
                                   className="text-gray-400 hover:text-white transition-colors text-sm">Home</a></li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors text-sm">About</a></li>
                            <li><a href="#"
                                   className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">OFFICE LOCATION</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">Address Line Lorem Ipsum Dolore Sit
                            Amet</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-16">

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies</a>
                    </div>

                    <p className="text-gray-400 text-sm">© 2025 By Enative. All Rights Reserved.</p>

                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-colors text-gray-400"
                            aria-label="Facebook"
                        >
                            <Facebook size={18}/>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-colors text-gray-400"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18}/>
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-white hover:text-white transition-colors text-gray-400"
                            aria-label="Twitter"
                        >
                            <Twitter size={18}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}