// Write your JS code here
import {Component} from 'react'

import './index.css'

class Header extends Component {
  state = {}

  render() {
    return (
      <nav className="header-section">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
        <div className="nav">
          <li className="para">Home</li>
          <li className="para">Products</li>
          <li className="para">Cart</li>
          <button className="logout-button">Log Out</button>
        </div>
      </nav>
    )
  }
}

export default Header
