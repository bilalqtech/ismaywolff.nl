const isProd = process.env.NODE_ENV === 'production'
/* istanbul ignore next: can't be reached because testing uses different env */
const DOMAIN = isProd ? 'cdn' : 'preview'
const BASE = `https://${DOMAIN}.contentful.com/spaces/${process.env.SPACE_ID}`

export const ARTICLES = `${BASE}/entries?content_type=articles&order=-sys.createdAt`
export const IMAGES = `${BASE}/assets?mimetype_group=image`
export const PAGES = `${BASE}/entries?content_type=pages`
export const WORKS = `${BASE}/entries?content_type=works&order=-fields.published`
