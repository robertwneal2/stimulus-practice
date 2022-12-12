import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "addVariantForm", "addVariantButton"]
  
  connect() {
    console.log("Hello, Stimulus!", this.element)
  }

  add_variant() {
    console.log("Add variant button pressed")
    const addVariantButton = this.addVariantButtonTarget
    const addVariantForm = this.addVariantFormTarget
    if (addVariantForm.style.display === "none") {
      addVariantButton.style.display = "none"
      addVariantForm.style.display = "block"
    } else {
      addVariantButton.style.display = "block"
      addVariantForm.style.display = "none"
    }
  }
  
}