export const ALGOLIA_APP_ID = process.env.NEXT_PUBLIC_ALGOLIA_APP_ID;
export const ALGOLIA_INDEX_NAME_SUFFIX = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME;
export const ALGOLIA_SEARCH_API_KEY = process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY;

export const ALGOLIA_ADMIN_API_KEY = process.env.ALGOLIA_ADMIN_API_KEY;
export const ENV_NAME = process.env.NODE_ENV || 'development';

export function buildIndexName() {
    const indexName = process.env.NEXT_ALGOLIA_INDEX_NAME || `${ENV_NAME}_${ALGOLIA_INDEX_NAME_SUFFIX}`;
    return indexName;
}
