import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { saveState } from "../Utils/Store.js";

class HomesService {

  setActiveHouse(houseId) {
    let foundHouse = appState.houses.find(h => h.id == houseId)
    console.log(foundHouse);
    appState.activeHouse = foundHouse
  }
  createHouse(formData) {
    let newHouse = new House(formData)
    console.log(newHouse);
    appState.houses = [...appState.houses, newHouse]
    saveState('houses', appState.houses)
  }

  removeHouse(houseId){
    let filteredArray = appState.houses.filter(h => h.id != houseId)
    appState.houses = filteredArray
    saveState('houses', appState.houses)
  }
}

export const homesService = new HomesService()