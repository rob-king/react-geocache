import React, {Component} from 'react'
import GeocacheModel from '../models/Geocache'

class GeocachesContainer extends Component {
  render() {
    GeocacheModel.all().then((res) => {
      console.log(res)
    })

    return (
      <div className="geocahesContainer">
        <p>My geocaches will live in here?</p>
      </div>
    )
  }
}

export default GeocachesContainer
