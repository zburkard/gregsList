import { generateId } from "../Utils/generateId.js"


export class House {

  constructor(data) {
    this.id = generateId()
    this.createdAt = new Date()
    this.location = data.location
    this.price = data.price
    this.sqft = data.sqft
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.img = data.img || "test"
    this.description = data.description
  }
  get CardTemplate() {
    return `
    <div class="col-12 col-md-4 p-4">
      <div class="card">
        <img src="${this.img}" class="card-img-top"
          alt="${this.sqft}">
        <div class="card-body">
          <h5 class="card-title d-flex justify-content-between mb-2">
            <span>${this.bedrooms} Bed ${this.bathrooms} Bath</span>
            <span>$ ${this.price}</span>
          </h5>
          <div class="d-flex justify-content-between">
            <button onclick="app.homesController.setActiveHouse('${this.id}')" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            See Details
            </button>
            <button onclick="app.homesController.removeHouse('${this.id}')" title="Delete house!" class="btn btn-danger">
              <i class="mdi mdi-delete"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    
    `
  }
  get ActiveHouseTemplate() {
    return `
    <div class="modal-header">
      <h1 class="modal-title fs-5" id="exampleModalLabel">${this.location}</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <h5>
      ${this.createdAt.toLocaleDateString()}
      </h5>
      <img src="${this.img}" alt="car" class="img-fluid">
      <b>Sq. Footage:${this.sqft}</b>
      <p>${this.description}</p>
      <div>Bedrooms: ${this.bedrooms} miles</div>
      <div>Bathrooms: ${this.bathrooms}</div>
      <div>Price:${this.price}</div>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    </div>
    `
  }

  static GetHouseFormTemplate() {
    return `
    <form onsubmit="app.homesController.createHouse()">
      <div class="form-floating mb-3">
        <input required type="text" minlength="3" class="form-control" id="location" placeholder="Location"
          name="location">
        <label for="car-make">Location</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="price" placeholder="Price" name="price">
        <label for="price">Price</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="url" class="form-control" id="house-img" placeholder="House Image" name="img">
        <label for="house-img">Image</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="sqft" placeholder="Square Footage" name="sqft">
        <label for="sqft">Square Footage</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="bedrooms" placeholder="Bedrooms" name="bedrooms">
        <label for="bedrooms">Bedrooms</label>
      </div>
      <div class="form-floating mb-3">
        <input required type="number" class="form-control" id="bathrooms" placeholder="Bathrooms" name="bathrooms">
        <label for="bathrooms">Bathrooms</label>
      </div>
      <div class="form-floating mb-3">
      <input required type="text" class="form-control" id="description" placeholder="Description" name="description">
      <label for="description">Description</label>
    </div>
      <button type="submit" class="btn btn-success mt-3">Submit</button>
      <button type="reset" class="btn btn-outline-danger mt-3">Reset</button>
    </form>
    
    `
  }

}
