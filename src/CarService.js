import axios from 'axios'

const API_URL = 'http://localhost:8082/'

class CarService {
  register(car) {
    return axios.post(API_URL + 'cars/registerCar', car)
  }

  get(car) {
    return axios.get(API_URL + 'car${id}', car)
  }

  getall(car) {
    return axios.get(API_URL + 'store', car)
  }
  async delete(id) {
    return axios
      .delete(`${API_URL}deleteCar/${id}`)
      .then(response => {
        alert('Car deleted successfully')
        return response.data
      })
      .catch(error => {
        alert('Error deleting car: ' + error.response.data.message)
      })
  }
  updateCar(id, carInfoUpdateRequest) {
    return axios.put(`${API_URL}updateCar/${id}`, carInfoUpdateRequest)
  }
}

export default new CarService()
