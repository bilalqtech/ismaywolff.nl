// dependencies
import React from 'react'
import Match from 'react-router/Match'
import About from '../components/About'
import Header from '../components/Header'
import Work from '../components/Work'

// component
const App = () =>
  (<div>
    <Header />
    <Match exactly pattern='/' component={Work} />
    <Match pattern='/about' component={About} />
  </div>)

// export
export default App
