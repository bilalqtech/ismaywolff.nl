/**
 * Takes an input width and staggers it by a set amount, to maximize
 * cache hits. Protects against invalid values (when used on server
 * for example) by returning a fallback value.
 *
 * The fallback doesn't have an obvious default since it can be used
 * for fullscreen images, or a grid of multiple images. So 250 is chosen
 * as something that isn't too big, but won't look completely terrible either.
 */

export function getImageWidth(width) {
  const fallbackWidth = 250
  const interval = 50

  // If on the server or the width is invalid, return a default width
  if (width <= 0) {
    return fallbackWidth
  }

  // Otherwise round width up to the nearest interval
  return Math.ceil(width / interval) * interval
}

/**
 * Appends any parameters to create a valid url for a
 * contentful image asset.
 */

export function createUrl({ url, width, height, fill }) {
  const fillParam = fill ? 'fit=fill&' : ''
  const widthParam = width ? `w=${width}` : ''
  const heightParam = height ? `&h=${height}` : ''

  return `${url}?${fillParam}${widthParam}${heightParam}&fl=progressive`
}

/**
 * Calculates the available width for an image which should fill the
 * viewport without distorting its proportions. Since the image
 * is sized proportionally, we only return the width.
 */

export function getAvailableWidth({ image, viewport }) {
  // Ratio over 1 means portrait orientation, under 1 is landscape
  const imageRatio = image.height / image.width
  const viewportRatio = viewport.height / viewport.width

  /**
   * For this ratio difference, height of the image is the limiting factor.
   * So we use height to proportionally calculate the width.
   */

  if (imageRatio > viewportRatio) {
    return Math.round(image.width * viewport.height / image.height)
  }

  // Otherwise we can just use the width
  return viewport.width
}
