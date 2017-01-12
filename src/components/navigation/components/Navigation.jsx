import React from 'react'
import { Link } from 'react-router'

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation
