import { appState } from "../AppState.js"
import { House } from "../Models/House.js"

class HomesService {
  createHouse(formData) {
    let newHouse = new House(formData)
    console.log(newHouse);
    appState.houses = [...appState.houses, newHouse]
  }
}

export const homesService = new HomesService()