import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
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

    return (
        <div className={classNames('flex items-center gap-2', className)}>
            <Link
                href={{ pathname, query }}
                as={asPath}
                locale="en"
                className={classNames(
                    'px-3 py-1 text-sm font-medium rounded transition-colors',
                    isEnglish
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                )}
            >
                EN
            </Link>
            <Link
                href={{ pathname, query }}
                as={asPath}
                locale="bg"
                className={classNames(
                    'px-3 py-1 text-sm font-medium rounded transition-colors',
                    isBulgarian
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                )}
            >
                BG
            </Link>
        </div>
    );
}