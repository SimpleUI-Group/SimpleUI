<template>
<div class="simple-ui-row" :style="styles">
    <slot></slot>
</div>
</template>
<script>
export default {
    name:'row',
    props:{
        space:String
    },
    computed:{
        styles() {
            return {
                'margin-left':this.space ? `-${this.space / 2}px` : '',
                'margin-right':this.space ? `-${this.space / 2}px` : ''
            }
        }
    },
    methods:{
        setChildSpace(space) {
            this.$children.forEach((v,i,a)=>{
                v.space = space;
            });
        }
    },
    mounted() {
        this.setChildSpace(this.space);
    }
}
</script>

<style lang="less">
@import '../../styles/index.less';
.simple-ui-row {
    box-sizing: border-box;
    position: relative;
    overflow:hidden;
}
</style>