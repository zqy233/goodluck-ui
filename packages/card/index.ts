import card from "./src/main.vue"
import { App } from "vue"
card.install = (app: App): void => {
  app.component(card.name, card)
}
export default card
