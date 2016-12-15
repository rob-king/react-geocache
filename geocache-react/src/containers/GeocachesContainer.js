import React, {Component} from 'react'
import GeocacheModel from '../models/Geocache'
import Geocaches from '../components/Geocaches'
import CreateGeocacheForm from '../components/CreateGeocacheForm'

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

  createGeocache(geocache) {
    console.log(geocache)
    let newGeocache = {geocache: geocache}
    GeocacheModel.create(newGeocache).then((res) => {
      let geocaches = res.data
      this.setState({geocaches})
    })
  }

  render() {
    return (
      <div className="geocahesComponent">
        <Geocaches
          geocaches={this.state.geocaches}
        />
      <CreateGeocacheForm
          createGeocache={this.createGeocache.bind(this)}
          />
      </div>
    )
  }
}

export default GeocachesContainer
