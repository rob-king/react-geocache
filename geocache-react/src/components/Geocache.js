import React, { Component } from 'react'

class Geocache extends Component {
  render() {
    return(
      <p data-todos-index={this.props.geocache.id}>
      <span>{this.props.geocache.item}</span>
      <span>{this.props.geocache.long}, {this.props.geocache.lat}</span>
      </p>
    )
  }

}

export default Geocache
