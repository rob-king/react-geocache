import axios from 'axios'

class GeocacheModel {
  static all() {
    let request = axios.get('http://localhost:4000/geocaches')
    return request
  }
}

export default GeocacheModel
