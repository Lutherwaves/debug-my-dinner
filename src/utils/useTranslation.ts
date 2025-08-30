import { useTranslation as useNextTranslation } from 'next-i18next';

export function useTranslation(namespace?: string) {
    const { t, i18n } = useNextTranslation(namespace);
    
    return {
        t,
        i18n,
        locale: i18n.language,
        isEnglish: i18n.language === 'en',
        isBulgarian: i18n.language === 'bg'
    };
}