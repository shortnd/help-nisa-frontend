import React from 'react'
import { Link } from 'react-router-dom'

export const Layout = ({ children }) => (
  <div className='App'>
    <header>
      <Link to="/">
        Home
      </Link>
      {' '}
      |
      {' '}
      <Link to='/standings'>
        Standings
      </Link>
      {' '}
      |
      {' '}
      <Link to='/teams'>
        Teams
      </Link>
    </header>
    <main>
      {children}
    </main>
    <footer>
      &copy;
    </footer>
  </div>
)
