import React from 'react';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Page(props) {
    const { page, site } = props;
    const { modelName } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no type, page '${props.path}'`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page layout matching the page model: ${modelName}`);
    }
    
    // Initialize translations
    useTranslation(['common', 'recipes']);
    
    return <PageLayout page={page} site={site} />;
}

export function getStaticPaths({ locales }) {
    const data = allContent();
    const paths = resolveStaticPaths(data);
    
    // Generate paths for all locales
    const localizedPaths = [];
    locales.forEach(locale => {
        paths.forEach(path => {
            const slug = path === '/' ? [] : path.split('/').filter(Boolean);
            localizedPaths.push({
                params: { slug },
                locale,
            });
        });
    });
    
    return { paths: localizedPaths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
    const data = allContent();
    const urlPath = '/' + (params.slug || []).join('/');
    const props = await resolveStaticProps(urlPath, data);
    
    return {
        props: {
            ...props,
            ...(await serverSideTranslations(locale, ['common', 'recipes'])),
        },
    };
}

export default Page;
