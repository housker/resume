import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import '../assets/index.css';
import '../assets/tunnel.jpg';
import '../assets/cornfield.jpg';
import rzoogg from '../assets/rzoogg.js';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './Landing.jsx';
import Projects from './Projects.jsx';
import Portfolio from './Portfolio.jsx';
// If interested in refactoring with mdbootstrap . . . https://mdbootstrap.com/support/webpack-support-eta/
//colors: https://www.pinterest.com/pin/142848619405813315/


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    window.executeHome();
  }

  render () {
    return (
      <div>
        <header>
            <div id="first" className="view jarallax" data-jarallax='{"speed": 0.2}'>
                <div className="mask rgba-white-light titleCont">
                    <div className="container flex-center text-center">
                      <div className="row mt-5">
                        <div className="col-md-12 wow fadeIn mb-3" id="main-title">
                          <h1 className="display-3 mb-2 wow fadeInDown" data-wow-delay="0.3s">Adelle Housker</h1>
                          <h5 className="text-uppercase mb-3 mt-1 font-weight-bold wow fadeIn" data-wow-delay="0.4s">Web developer</h5>
                        </div>
                      </div>
                    </div>
                </div>
              <canvas id="noise" className="noise"></canvas>
              <div className="vignette"></div>
              </div>
              <div className="container">
                  <div className="row">
                      <div className="blurb col-md-12 text-center mb-3">
                          <h3 className="font-weight-bold light-blue-text my-3">"You are currently operating under several erroneous assumptions. Normally, people will just delete your email and leave you to your own problems. But for me, I believe that there may be some hope for you, if you'll take a moment to consider the reality of your faults."</h3>
                      </div>
                  </div>
              </div>
              <div id="second" className="view jarallax intro-2">
                <Link to="/carousel"><button type="button" className="btn btn-outline-secondary btn-lg skbtn">Skills</button></Link>
            </div>
        </header>
      </div>
    )

  }
}

export default App;