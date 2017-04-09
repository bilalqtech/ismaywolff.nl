import glamorous from 'glamorous'
import { colors } from '../../../styles'

const HeaderLink = glamorous.span(props => ({
  order: 2,
  marginLeft: '0.5rem',
  marginRight: '0.5rem',

  '& > a': {
    textDecoration: 'none',
    fontFamily: 'Bitter, serif',
    color: colors.black,
    fontSize: props.size
  },

  '& > a.active, & > a:hover': {
    textDecoration: 'underline'
  },

  '@media (min-width: 20em)': {
    marginLeft: 0,
    marginRight: 0,
    order: 'unset'
  }
}))

HeaderLink.defaultProps = {
  size: '1rem'
}

export default HeaderLink
