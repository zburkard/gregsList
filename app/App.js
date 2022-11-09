import { CarsController } from "./Controllers/CarsController.js";
// FIXME Step 6: register your controller and get your console log on your web page
class App {
  carsController = new CarsController()
}

window["app"] = new App();
