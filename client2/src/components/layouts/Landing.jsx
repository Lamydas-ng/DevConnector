import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Landing extends Component {
  render() {
    return (
      <div> <section class="landing">
      <div className="dark-overlay">
          <div className="landing-inner">
              <h1 className="x-large">Developer Connector</h1>
              <p className="lead">
                  Create a developer profile/portfolio, share posts and get help from
                  other developers
              </p>
              <div >
            <ul className="buttons">
              <li><Link to="/register" className="btn  btn-primary" >Signup</Link></li>
            <li><Link to="/login" className="btn btn-light">SignIn</Link></li>

            </ul>

              </div>
          </div>
      </div>
  </section></div>
    )
  }
}
