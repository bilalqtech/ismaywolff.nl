/**
 * Rounds input number to the upper multiple of the given amount.
 * Useful for staggering image resizes to maximize cache hits.
 */

export function roundUp(number, amount = 50) {
  if (number < amount) {
    return amount
  }

  return (Math.ceil(number / amount) * amount)
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

export function getAvailableWidth({ image, window }) {
  // ratio over 1 means portrait orientation, under 1 is landscape
  const imageRatio = image.height / image.width
  const windowRatio = window.innerHeight / window.innerWidth

  /**
   * For this ratio difference, height of the image is the limiting factor.
   * So we use height to proportionally calculate the width.
   */

  if (imageRatio > windowRatio) {
    return Math.round((image.width * window.innerHeight) / image.height)
  }

  // otherwise we can just use the width
  return window.innerWidth
}
