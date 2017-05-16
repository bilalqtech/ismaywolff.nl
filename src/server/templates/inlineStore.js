const inlineStore = preloadedState => `
  <script>
    window.preloadedState = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
  </script>
`

export default inlineStore
