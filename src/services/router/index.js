import Vue from "vue"
import VueRouter from "vue-router"
import AuthRoutes from "./auth"

Vue.use(VueRouter)

let allRoutes = []
allRoutes = allRoutes.concat(AuthRoutes)

export default new VueRouter({
    mode: "history",
    routes: allRoutes
})