import * as React from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';

interface LanguageToggleProps {
    className?: string;
    colors?: string;
}

export default function LanguageToggle({ className, colors = 'bg-light-fg-dark' }: LanguageToggleProps) {
    const router = useRouter();
    const { locale, pathname, asPath, query } = router;
    
    const isEnglish = locale === 'en';
    const isBulgarian = locale === 'bg';

    const changeLanguage = (newLocale: string) => {
        router.push(pathname, asPath, { locale: newLocale });
    };

    return (
        <div className={classNames('flex items-center gap-1', className)}>
            <button
                onClick={() => changeLanguage('en')}
                className={classNames(
                    'px-2 py-1 text-xs font-medium rounded transition-colors border cursor-pointer',
                    isEnglish
                        ? 'bg-primary text-white border-primary'
                        : 'text-gray-600 border-gray-300 hover:text-primary hover:border-primary hover:bg-gray-50'
                )}
            >
                EN
            </button>
            <button
                onClick={() => changeLanguage('bg')}
                className={classNames(
                    'px-2 py-1 text-xs font-medium rounded transition-colors border cursor-pointer',
                    isBulgarian
                        ? 'bg-primary text-white border-primary'
                        : 'text-gray-600 border-gray-300 hover:text-primary hover:border-primary hover:bg-gray-50'
                )}
            >
                BG
            </button>
        </div>
    );
}