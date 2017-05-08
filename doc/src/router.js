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
    },
    {
        "path":"/input",
        component:function (resolve) {
            require(["./component/input.vue"], resolve);
        }
    },
    {
        "path":"/nav",
        component:function (resolve) {
            require(["./component/nav.vue"], resolve);
        }
    },
    {
        "path":"/plusminus",
        component:function (resolve) {
            require(["./component/plusminus.vue"], resolve);
        }
    }
];