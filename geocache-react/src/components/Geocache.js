import React, { Component } from 'react'

class Geocache extends Component {
  render() {
    return(
      <div className="geocache">
        <p data-todos-index={this.props.geocache.id}>
        <span>{this.props.geocache.item}</span>
        </p>
        <p>
          <span>{this.props.geocache.long}, {this.props.geocache.lat}</span>
        </p>
      </div>
    )
  }
}

export default Geocache
