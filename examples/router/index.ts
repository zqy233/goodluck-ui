import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
// 根据组件库中组件动态赋值路由
import goodluckUi from "../../packages"
const components = Object.keys(goodluckUi).filter(item => item != "install")
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
    redirect: components[0],
    children: [
      {
        path: "/icon",
        name: "icon",
        component: () => import("../views/icon.vue")
      },
      ...components.map(item => {
        return {
          path: `/${item}`,
          name: `${item}`,
          component: () => import(`../views/${item}.vue`)
        }
      })
    ]
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
