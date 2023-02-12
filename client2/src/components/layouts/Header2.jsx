import React from 'react'
import PropTypes from 'prop-types'
import Header3 from "./Header3";
const header2 = props => {
  return (
    <div>header2 {props.appName}
    <Header3 appName={props.appName}></Header3>
    </div>
  )
}

header2.propTypes = {}

export default header2