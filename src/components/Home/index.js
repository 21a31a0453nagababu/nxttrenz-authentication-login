// Write your JS code here
import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {}

  render() {
    return (
      <>
        <Header />
        <div className="Home-container">
          <div className="description-page">
            <h1 className="heading">
              Clothes That Get YOU
              <br />
              Noticed
            </h1>

            <p className="paragraph">
              Fashion is part of the daily air it changes all the time .Clothes
              have always been a marker of the era and we are in revolution Your
              fashion makes you seen and heard that way you are.So,celebrate the
              seasons new and exciting fashion in your own way
            </p>
            <button className="shop-button">Shop now</button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="img"
          />
        </div>
      </>
    )
  }
}
export default Home
