import React from 'react'
import { Link } from "react-router-dom"
import Logo from "../images/app-logo.png"

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <img src={Logo} alt="App Logo"/>
            <Link to="/">Movie Watchlist</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">Watchlist</Link>
            </li>
            <li>
              <Link to="/watched">Watched</Link>
            </li>
            <li>
              <Link to="/add" className="light-btn">+ Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
