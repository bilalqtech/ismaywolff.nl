import glamorous from 'glamorous'

const HeaderTitle = glamorous.h1({
  whiteSpace: 'nowrap',
  order: 1,
  width: '100%',
  textAlign: 'center',
  marginTop: 0,
  marginBottom: 0,

  '@media (min-width: 20em)': {
    marginLeft: '1rem',
    marginRight: '1rem',
    width: 'auto',
    order: 'unset'
  }
})

export default HeaderTitle
