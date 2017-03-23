import Vue from "vue";
import Router from "vue-router";
import Main from "./main.vue";
import routerConfig from "./router.js";

import SimpleUI from "../src/index.js";

SimpleUI.init({
    rem:2,
    ui:750
});

Vue.use(Router);

Vue.use(SimpleUI);

const router = new Router({
    routes:routerConfig
});

new Vue({
    router,
    render: h => h(Main)
}).$mount("#app");