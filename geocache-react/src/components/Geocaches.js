import React, {Component} from 'react'
import Geocache from './Geocache'


class Geocaches extends Component {
  render() {
    let geocaches = this.props.geocaches.map((geocache) => {
      return (
        <Geocache
          key={geocache.id}
          geocache={geocache}/>
      )
    })
    return(
      <div className="geocache">
        {geocaches}
      </div>
    )
  }
}

export default Geocaches
