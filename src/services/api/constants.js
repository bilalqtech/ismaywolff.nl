// current build env
const isProd = process.env.NODE_ENV === 'production'

// endpoints
const DOMAIN = isProd ? 'cdn' : 'preview'
const BASE = `https://${DOMAIN}.contentful.com/spaces/${process.env.SPACE_ID}`
export const WORKS_ENDPOINT = `${BASE}/entries?content_type=works`
export const IMAGES_ENDPOINT = `${BASE}/assets?mimetype_group=image`

// token
const PROD_TOKEN = process.env.CONTENT_DELIVERY_TOKEN
const DEV_TOKEN = process.env.CONTENT_PREVIEW_TOKEN
export const TOKEN = isProd ? PROD_TOKEN : DEV_TOKEN
