import React from 'react'
import { connect } from 'react-redux'

const ErrorPage = () => (
  <div>
    <p>Page not found</p>
  </div>
)

export default connect()(ErrorPage)