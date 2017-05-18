const styles = `
  /* Box-sizing reset */

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  /* Size settings */

  html {
    height: 100%;
    width: 100%;
  }

  body {
    min-height: 100%;
  }

  /* Responsive images */

  img {
    max-width: 100%;
  }

  /* Cascade svg fill color */

  svg {
    fill: currentColor;
  }

  /* Fonts */

  html {
    font-size: 18px;
  }

  @media (min-width: 35em) {
    html {
      font-size: 20px;
    }
  }

  @media (min-width: 40em) {
    html {
      font-size: 22px;
    }
  }

  @media (min-width: 45em) {
    html {
      font-size: 24px;
    }
  }

  body {
    font-family: 'Crimson Text', serif;
    font-weight: 400;
    line-height: 1.5;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Bitter', serif;
    font-weight: 400;
  }
`

export default styles