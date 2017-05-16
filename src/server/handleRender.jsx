import useragent from 'useragent'
import handleReturningUser from './handleReturningUser'
import handleBots from './handleBots'
import handleNewUser from './handleNewUser'

function handleRender(req, res) {
  const release = process.env.RELEASE
  const commit = release.substring(0, release.indexOf('-'))
  const returningUser = req.cookies.commit && req.cookies.commit === commit
  const agent = useragent.lookup(req.headers['user-agent'])
  const isBot = agent.device.toJSON().family === 'Spider'

  if (returningUser) {
    handleReturningUser(req, res)
    return
  }

  if (isBot) {
    handleBots(req, res)
    return
  }

  handleNewUser(req, res)
}

export default handleRender
