import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { homesService } from "../Services/HomesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawHomes() {
  let template = ''
  appState.houses.forEach(house => template += house.CardTemplate)
  setHTML('listings', template)
  setHTML('listing-form', House.GetHouseFormTemplate())
}
function _drawActiveHouse() {
  setHTML('details', appState.activeHouse.ActiveHouseTemplate)
}


export class HomesController {

  constructor() {
    // console.log(appState.houses)
    appState.on('houses', _drawHomes)
    appState.on('activeHouse', _drawActiveHouse)
  }

  async removeHouse(houseId) {
    if (await Pop.confirm('Are you sure want to delete that car')) {
      homesService.removeHouse(houseId)

    }
  }

  createHouse() {
    // NOTE don't refresh the page
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    console.log(formData);
    homesService.createHouse(formData)
  }

  setActiveHouse(houseId) {
    homesService.setActiveHouse(houseId)
  }
  showHomes() {
    _drawHomes()
  }

}