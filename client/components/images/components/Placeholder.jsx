import PropTypes from 'prop-types'
import glamorous from 'glamorous'
import { colors } from '../../../styles'

const setPaddingTop = props => `${(props.height / props.width) * 100}%`

/**
 * Renders a background color while the child image is loading. Expects an img
 * as child. Only the ratio between height and width params is important so
 * actual sizes aren't necessary.
 */

const Placeholder = glamorous.picture(props => ({
  display: 'block',
  position: 'relative',
  height: 0,
  width: '100%',
  paddingTop: setPaddingTop(props),
  background: colors.gray,

  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
}))

Placeholder.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired
}

export default Placeholder
