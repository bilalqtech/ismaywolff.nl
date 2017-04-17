/**
 * Bump this when making backwards incompatible changes to the tracking
 * implementation. This allows you to create a segment or view filter
 * that isolates only data captured with the most recent tracking changes.
 */

export const TRACKING_VERSION = '3'

/**
 * A default value for dimensions so unset values always are reported as
 * something. This is needed since Google Analytics will drop empty dimension
 * values in reports.
 */

export const NULL_VALUE = '(not set)'

/**
 * The tracking id to sent with all analytics. Depending on the build environment
 * it uses either the dev or the prod id.
 */

const isProd = process.env.NODE_ENV === 'production'
export const TRACKING_ID = isProd ? process.env.PROD_TRACKING_ID : process.env.DEV_TRACKING_ID

/**
 * Eliminate referral spam by filtering all incoming analytics traffic with this
 * custom dimension. Traffic that doesn't contain it will be dropped.
 */

export const MAGIC_WORD = 'iamnotaspammer'
