

<template>
<div class="simple-ui-nav" :style="styles">
   <slot></slot>
</div>
</template>
<script>
export default {
    name:'nav',
    props:{
        space:String,
        size:String
    },
    computed:{
        styles() {
            return {
                'margin-left':this.space ? `-${this.space / 2}px` : '',
                'margin-right':this.space ? `-${this.space / 2}px` : '',
                "font-size": this.size ? `${this.size}px` : ''
            }
        }
    },
    methods:{
       
    }
}
</script>

<style lang="less">
@import '../../styles/index.less';
.simple-ui-nav {
    width: 100%;
    text-align:center;
    display:flex;
    height: @BUTTON_HEIGHT;
    margin:.1rem 0;
    line-height: @BUTTON_HEIGHT;
    
}
</style>

