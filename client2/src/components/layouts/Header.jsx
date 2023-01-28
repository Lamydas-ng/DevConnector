import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div> <nav class="navbar bg-dark">
      <h1>
          <a class="btn" href="index.html"><i class="fas fa-code"></i>DevConnector</a>
      </h1>
      <ul>
          <li><a class="btn" href="profiles.html">Developers</a></li>
          <li><a class="btn" href="signup.html">Signup</a></li>
          <li><a class="btn" href="signin.html">SignIn</a></li>
      </ul>
  </nav></div>
    )
  }
}
