import React from 'react'
// import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <a className="nav-link" href="/">
          Home
        </a>
        <a className="nav-link" href="/camera">
          Camera
        </a>
      </nav>
    </div>
  )
}

export default Navbar
