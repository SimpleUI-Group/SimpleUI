<template>
<div class="simple-ui-col" :class="classes">
    <slot></slot>
</div>
</template>
<script>
export default {
    name:'col',
    props:{
        col:String
    },
    computed: {
        classes() {
            return {
                [`simple-col-${this.col}`]: this.col
            }
        },
        styles() {
           
        }
    }
}
</script>

<style lang="less">
@import '../../styles/index.less';
.simple-ui-col {
    box-sizing: border-box;
    position: relative;
    float:left;
}

/*
grid
*/

.simple-col-1 {
    width:4.16666%;
}
.simple-col-2 {
    width:8.33333%;
}
.simple-col-3 {
    width:12.5%;
}
.simple-col-4 {
    width:16.66666%;
}
.simple-col-5 {
    width:20.83333%;
}
.simple-col-6 {
    width:25%;
}
.simple-col-7 {
    width:29.16666%;
}
.simple-col-8 {
    width:33.33333%;
}
.simple-col-9 {
    width:37.5%;
}
.simple-col-10 {
    width:41.66666%;
}
.simple-col-11 {
    width:45.83333%;
}
.simple-col-12 {
    width:50%;
}
.simple-col-13 {
    width:54.16666%;
}
.simple-col-14 {
    width:58.33333%;
}
.simple-col-15 {
    width:62.50000%;
}
.simple-col-16 {
    width:66.66666%;
}
.simple-col-17 {
    width:70.833333%;
}
.simple-col-18 {
    width:75%;
}
.simple-col-19 {
    width:79.16666%;
}
.simple-col-20 {
    width:83.33333%;
}
.simple-col-21 {
    width:87.5%;
}
.simple-col-22 {
    width:91.66666%;
}
.simple-col-23 {
    width:95.83333%;
}
.simple-col-24 {
    width:100%;
}
</style>