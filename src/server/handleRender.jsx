import useragent from 'useragent'
import handleReturningUser from './handleReturningUser'
import handleBots from './handleBots'
import handleNewUser from './handleNewUser'

function handleRender(req, res) {
  const releaseWithoutSuffix = process.env.RELEASE.replace('-server', '')
  const returningUser = req.cookies.release && req.cookies.release === releaseWithoutSuffix
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
