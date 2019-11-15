import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <div>
            <h1>Home</h1>
          </div>
        </Link>
        <Link to="/camera">
          <div>
            <h1>Camera</h1>
          </div>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar
