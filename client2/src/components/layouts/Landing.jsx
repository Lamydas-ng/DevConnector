import React, { Component } from 'react'
import {Link} from "react-router-dom";
export default class Landing extends Component {
  render() {
    return (
      <div> <section class="landing">
      <div class="dark-overlay">
          <div class="landing-inner">
              <h1 class="x-large">Developer Connector</h1>
              <p class="lead">
                  Create a developer profile/portfolio, share posts and get help from
                  other developers
              </p>
              <div class="container">
            <ul>
              <li><Link to="/register" class="btn btn-light" >Signup</Link></li>
            <li><Link to="/login" class="btn btn-light">SignIn</Link></li>

            </ul>

              </div>
          </div>
      </div>
  </section></div>
    )
  }
}
