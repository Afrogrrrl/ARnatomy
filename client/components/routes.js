import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import Camera from './Camera'
import Landing from './landing'

class Routes extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/camera" component={Camera} />
      </div>
    )
  }
}

export default Routes
