<template>
<div class="simple-ui-nav" :class="classes" @click="onclick">
    <ul>
        <li>Nav 1</li>
        <li>Nav 2</li>
        <li>Nav 3</li>
        <li>Nav 4</li>
    </ul>
</div>
</template>
<script>
export default {
    name:'nav',
    props:{
        type: String,
        pull: Boolean,
        edge: Boolean,
        icon:String
    },
    computed: {
        classes() {
            return {
                [this.type] : this.type,
                'simple-ui-button-pull': !!this.pull,
                'simple-ui-button-edge': !!this.edge
            }
        }
    },
    methods:{
        onclick(ev) {
            this.$emit('click', ev);
        }
    }
}
</script>
<style lang="less">
@import '../../styles/index.less';
.simple-ui-nav {
    position: fixed;
    bottom:0;
    width: 100%;
    text-align:center;
    display:block;
    width:92%;
    height: @BUTTON_HEIGHT;
    margin:.1rem 4%;
    line-height: @BUTTON_HEIGHT;
    border-radius:4px;
    box-sizing:border-box;
    
    ul{
        width: 100%;
        height: 100%;
        list-style: none;
        overflow: hidden;
        li{
            width: 20%;
            height: 100%;
            float: left;
            margin: 0 0.05rem;
             background: #666;
             border-radius: 0.1rem;
             color: #fff;
              &:hover {
               background: #f30;
            }
        }
    }
   
    .simple-ui-icon {
        position:relative;
        top:.02rem;
    } 
}
</style>