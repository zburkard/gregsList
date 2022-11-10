import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { homesService } from "../Services/HomesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";


function _drawHomes() {
  let template = ''
  appState.houses.forEach(house => template += house.CardTemplate)
  setHTML('listings', template)
  setHTML('listing-form', House.GetHouseFormTemplate())
}
export class HomesController {

  constructor() {
    // console.log(appState.houses)
    appState.on('houses', _drawHomes)
    // _drawHomes()
  }

  createHouse() {
    // NOTE don't refresh the page
    window.event.preventDefault()
    let form = window.event.target
    let formData = getFormData(form)
    console.log(formData);
    homesService.createHouse(formData)
  }

  showHomes() {
    _drawHomes()
  }

}