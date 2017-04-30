const isProd = process.env.NODE_ENV === 'production'
const PROD_TOKEN = process.env.CONTENT_DELIVERY_TOKEN
const DEV_TOKEN = process.env.CONTENT_PREVIEW_TOKEN

/* istanbul ignore next: can't be reached because testing uses different env */
const TOKEN = isProd ? PROD_TOKEN : DEV_TOKEN

export default TOKEN
