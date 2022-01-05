import { createStore } from "vuex"
// 根据组件库中组件动态赋值路由
import goodluckUi from "../../packages"
const components = Object.keys(goodluckUi).filter(item => item != "install")

const defaultState = {
  components
}
export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    // increment(state: typeof defaultState) {
    //   state.components
    // }
  },
  actions: {
    // increment(context) {
    //   context.commit("increment")
    // }
  },
  getters: {
    // double(state: typeof defaultState) {
    //   return 2 * state.count
    // }
  }
})
