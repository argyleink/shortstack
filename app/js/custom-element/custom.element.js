import {constructStylesheet} from '../utils.js'
import styles from './custom.element.css'

export default class CustomElement extends HTMLElement {
  
  constructor() {
    super()

    this.$shadow            = this.attachShadow({mode: 'closed'})
    this.$shadow.innerHTML  = this.render()

    this.styles = constructStylesheet(styles)
  }

  connectedCallback() {
    this.$shadow.adoptedStyleSheets = [this.styles]
  }

  disconnectedCallback() {}

  render() {
    return `
      <div>Custom Element</div>
    `
  }
}

customElements.define('custom-element', CustomElement)