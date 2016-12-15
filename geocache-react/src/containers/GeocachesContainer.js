import React, {Component} from 'react'
import GeocacheModel from '../models/Geocache'
import Geocaches from '../components/Geocaches'

class GeocachesContainer extends Component {
  constructor() {
    super()
    this.state = {
      geocaches:[]
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    GeocacheModel.all().then((res) => {
      this.setState({
        geocaches: res.data,
        geocache:  ''
      })
    })
  }

  render() {
    return (
      <div className="geocahesComponent">
        <Geocaches
          geocaches={this.state.geocaches}
        />
      </div>
    )
  }
}

export default GeocachesContainer
