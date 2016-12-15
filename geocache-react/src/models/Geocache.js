import axios from 'axios'

class GeocacheModel {
  static all() {
    let request = axios.get('http://localhost:4000/geocaches')
    return request
  }

  static create(geocache) {
    let request = axios.post('http://localhost:4000/geocaches', geocache)
    return request
  }
}

export default GeocacheModel
