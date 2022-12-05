import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "visable", "secret", "warning" ]
  
  toggle() {
    const element = this.visableTarget
    if (element.style.display === "none") {
      element.style.display = "block"
    } else {
      element.style.display = "none"
    }
  }

  secret() {
    const element = this.secretTarget
    if (element.style.display === "none") {
      element.style.display = "block"
    } else {
      element.style.display = "none"
    }
  }

  length_check() {
    const input_element = document.getElementById('text_input')
    const warning_element = this.warningTarget
    let input_length = input_element.value.length
    if (input_length > 10) {
      warning_element.style.display = "inline"
    } else {
      warning_element.style.display = "none"
    }
  }
  
}
