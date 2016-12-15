import React, {Component} from 'react'

class CreateGeocacheForm extends Component {
  constructor() {
    super()

    this.state = {
      geocache: ''
    }
  }

  onItemInputChange(event) {
    this.setState({
      geocache: {
        item: event.target.value,
        lat: this.state.geocache.lat,
        long: this.state.geocache.long
      }
    })
  }

  onLatInputChange(event) {
    this.setState({
      geocache: {
        item: this.state.geocache.item,
        lat: event.target.value,
        long: this.state.geocache.long
      }
    })
  }

  onLongInputChange(event) {
    this.setState({
      geocache: {
        item: this.state.geocache.item,
        lat: this.state.geocache.lat,
        long: event.target.value
      }
    })
  }

  onFormSubmit(event) {
    event.preventDefault()
    let geocache = this.state.geocache
    this.props.createGeocache(geocache)
    this.setState({
      geocache:''
    })
  }

  render() {
    return (
      <div className='createForm geocacheForm'>
        <h2>Mark a found Geocache</h2>
        <form onSubmit={event => this.onFormSubmit(event)}>
          <input
            placeholder="Item"
            onChange={event => this.onItemInputChange(event)}
            type="text"
            value={this.state.geocache.item}
            />
          <input type="text"
            placeholder="Latitude"
            onChange={event => this.onLatInputChange(event)}
            value={this.state.geocache.lat}
          />
          <input type="text"
            placeholder="Longitude"
            onChange={event => this.onLongInputChange(event)}
            value={this.state.geocache.long}
          />

        <button type='submit'>Save</button>
        </form>
      </div>
    )
  }
}

export default CreateGeocacheForm
