import title from "./src/main.vue"
import { App } from "vue"
title.install = (app: App): void => {
  app.component(title.name, title)
}
export default title
