import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const alert = (alertReducer) => {
  return (
    <div>alert</div>
  )
}

alert.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(alert)