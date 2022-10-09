// src/main.js
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import "./css/normalize.css";
import "./css/skeleton.css";


import artistIndex from "./artist/index.vue";
import artistDetails from "./artist/details.vue";

const routes = [

  // Home Routing
  { path: "/", component: artistIndex, props: true },

  // Routing Artistas
  { path: "/artista", component: artistIndex, props: true },
  {
    path: "/artista/show/:id",
    component: artistDetails,
    props: { show: true },
  },
  {
    path: "/artista/edit/:id",
    component: artistDetails,
    props: { edit: true },
  },
  {
    path: "/artista/create",
    component: artistDetails,
    props: { create: true },
  },
  {
    path: "/artista/delete/:id",
    component: artistDetails,
    props: { delete: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

let app = createApp(App);

app.use(router);

app.mount("#app");
