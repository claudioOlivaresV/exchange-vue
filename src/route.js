import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import About from "@/views/About";
import Errors from "@/views/Error";
import CoinDetail from "@/views/CoinDetail";



Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "*",
      name: "Error",
      component: Errors
    },
    // ruta dinamica
    {
      path: "/coin/:id",
      name: "coin-detail",
      component: CoinDetail
    }
  ]
});
