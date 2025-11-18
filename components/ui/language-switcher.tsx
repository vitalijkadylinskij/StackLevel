'use client'

import { useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from '@/i18n/navigation';

const locales = ['en', 'ru'] as const;

export default function LanguageSwitcher() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const toggleLanguage = () => {
        const currentIndex = locales.indexOf(currentLocale as typeof locales[number]);
        const nextIndex = (currentIndex + 1) % locales.length;
        const nextLocale = locales[nextIndex];

        router.replace(pathname, { locale: nextLocale });
    };

    return (
        <Button
            variant="outline"
            className="px-8 py-4 text-gray-900 text-sm text-white font-medium border rounded-full border-gray-200 cursor-pointer uppercase bg-custom-dark"
            onClick={toggleLanguage}
        >
            {currentLocale.toUpperCase()}
        </Button>
    );
}