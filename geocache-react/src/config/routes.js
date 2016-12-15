import React from 'react'
import {Route} from 'react-router'
import App from '../App'
import GeocachesContainer from '../containers/GeocachesContainer'

module.exports =  (
  <Route path='/' component={App}>
    <Route path='/geocaches' component={GeocachesContainer}/>
  </Route>
)
