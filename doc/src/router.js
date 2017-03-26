export default [
    {
        "path":"/",
        component:function (resolve) {
            require(["./component/index.vue"], resolve);
        }
    },
    {
        "path":"/index",
        component:function (resolve) {
            require(["./component/index.vue"], resolve);
        }
    },
    {
        "path":"/button",
        component:function (resolve) {
            require(["./component/button.vue"], resolve);
        }
    },
    {
        "path":"/icon",
        component:function (resolve) {
            require(["./component/icon.vue"], resolve);
        }
    },
    {
        "path":"/grid",
        component:function (resolve) {
            require(["./component/grid.vue"], resolve);
        }
    }
];