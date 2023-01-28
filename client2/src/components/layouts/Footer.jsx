//component

//class based components


import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>&copy;{ new Date().getFullYear() } https://www.knowledgehut.com</div>
    )
  }
}
