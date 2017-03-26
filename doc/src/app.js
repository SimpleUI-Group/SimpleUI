import Vue from "vue";
import Router from "vue-router";
import Main from "./main.vue";
import routerConfig from "./router.js";

import SimpleUI from "../../src/index.js";

import Docbox from "./common/docbox.vue";
import Dl from "./common/docleft.vue";
import Dr from "./common/docright.vue";

import "./styles/index.less";

SimpleUI.init({
    rem:2,
    ui:750
});

Vue.use(Router);

Vue.use(SimpleUI);

Vue.component("Docbox", Docbox);
Vue.component("Dl", Dl);
Vue.component("Dr", Dr);

const router = new Router({
    routes:routerConfig
});

new Vue({
    router,
    render: h => h(Main)
}).$mount("#app");