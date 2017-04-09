import { css } from 'glamor'
import glamorous from 'glamorous'
import { colors } from '../../../styles'

const scale = css.keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)', opacity: 0 }
})

const Spinner = glamorous.div({
  width: '2rem',
  height: '2rem',
  margin: '2rem auto',
  backgroundColor: colors.black,
  borderRadius: '100%',
  animation: `${scale} 1s infinite ease-in-out`
})

export default Spinner
