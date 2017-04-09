import glamorous from 'glamorous'

const HeaderContainer = glamorous.header({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'baseline',
  paddingBottom: '1rem',
  flexWrap: 'wrap',

  '@media (min-width: 20em)': {
    flexWrap: 'unset'
  }
})

export default HeaderContainer
