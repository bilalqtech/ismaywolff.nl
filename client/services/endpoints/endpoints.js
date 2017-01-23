const isProd = process.env.NODE_ENV === 'production'
const DOMAIN = isProd ? 'cdn' : 'preview'
const BASE = `https://${DOMAIN}.contentful.com/spaces/${process.env.SPACE_ID}`

export const WORKS = `${BASE}/entries?content_type=works`
export const IMAGES = `${BASE}/assets?mimetype_group=image`
