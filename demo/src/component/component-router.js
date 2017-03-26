export default {
    "path":"/component",
    component:function (resolve) {
        require(["./main.vue"], resolve);
    },
    children:[
        {
            "path":"button-1",
            component:function (resolve) {
                require(["./button-1.vue"], resolve);
            },
        },
        {
            "path":"button-2",
            component:function (resolve) {
                require(["./button-2.vue"], resolve);
            },
        },
        {
            "path":"button-3",
            component:function (resolve) {
                require(["./button-3.vue"], resolve);
            },
        },
        {
            "path":"icon-1",
            component:function (resolve) {
                require(["./icon-1.vue"], resolve);
            },
        },
        {
            "path":"icon-2",
            component:function (resolve) {
                require(["./icon-2.vue"], resolve);
            },
        },
        {
            "path":"icon-3",
            component:function (resolve) {
                require(["./icon-3.vue"], resolve);
            },
        },
        {
            "path":"grid-1",
            component:function (resolve) {
                require(["./grid-1.vue"], resolve);
            },
        },
        {
            "path":"grid-2",
            component:function (resolve) {
                require(["./grid-2.vue"], resolve);
            },
        },
        {
            "path":"grid-3",
            component:function (resolve) {
                require(["./grid-3.vue"], resolve);
            },
        }
    ]
};