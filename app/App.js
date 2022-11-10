import { CarsController } from "./Controllers/CarsController.js";
import { HomesController } from "./Controllers/HomesController.js";
// FIXME Step 6: register your controller and get your console log on your web page
class App {
  carsController = new CarsController()
  homesController = new HomesController()
}

window["app"] = new App();
