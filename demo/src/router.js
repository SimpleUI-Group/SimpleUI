export default [
    {
        "path":"/",
        component:function (resolve) {
            require(["./index.vue"], resolve);
        }
    },
    {
        "path":"/index",
        component:function (resolve) {
            require(["./index.vue"], resolve);
        }
    },
    {
        "path":"/grid",
        component:function (resolve) {
            require(["./grid.vue"], resolve);
        }
    },
    {
        "path":"/list",
        component:function (resolve) {
            require(["./list.vue"], resolve);
        }
    },
     {
        "path":"/nav",
        component:function (resolve) {
            require(["./nav.vue"], resolve);
        }
    }
];