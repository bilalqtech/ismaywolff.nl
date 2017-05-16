import renderStatic from './renderStatic'

function handleReturningUser(req, res) {
  res.setHeader('Cache-Control', 'public, max-age=0')
  res.send(renderStatic({}))
}

export default handleReturningUser
