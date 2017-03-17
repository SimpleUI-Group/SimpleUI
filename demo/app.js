import Vue from 'vue';
import Router from 'vue-router';
import Main from './main.vue';
import routerConfig from './router.js';


Vue.use(Router);

const router = new Router({
    routes:routerConfig
});

new Vue({
    router,
    render: h => h(Main)
}).$mount('#app');