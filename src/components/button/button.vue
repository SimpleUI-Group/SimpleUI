<template>
<div class="simple-ui-button" :class="classes" @click="onclick">
    <Icon v-if="icon" :type="icon" size="20" color="#fff"></Icon>
    <span><slot></slot></span>
</div>
</template>
<script>
export default {
    name:'button',
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
.simple-ui-button {
    text-align:center;
    display:block;
    width:92%;
    height: @BUTTON_HEIGHT;
    margin:.1rem 4%;
    line-height: @BUTTON_HEIGHT;
    border:1px solid @BUTTON_DEFAULT_BORDER;
    background: #fff;
    color:@DEFAULT_COLOR;
    border-radius:4px;
    box-sizing:border-box;
    .transition();
    &:active {
        border-color:@BUTTON_PRIMARY;
        color:@BUTTON_PRIMARY;
    }
    &.simple-ui-button-pull {
        width:100%;
        margin-left:0;
        margin-right:0;
    }
    &.simple-ui-button-edge {
       border-radius:0;
    }
    //type
    &.primary {
         background: @BUTTON_PRIMARY;
         border-color:@BUTTON_PRIMARY;
         color:#fff;
         &:active {
            background: @BUTTON_PRIMARY_HOVER;
            border-color:@BUTTON_PRIMARY_HOVER;
            color:#fff;
        }
    } 
    &.danger {
         background: @BUTTON_DANGER;
         border-color:@BUTTON_DANGER;
         color:#fff;
         &:active {
            background: @BUTTON_DANGER_HOVER;
            border-color:@BUTTON_DANGER_HOVER;
            color:#fff;
        }
    } 
    &.success {
         background: @BUTTON_SUCCESS;
         border-color:@BUTTON_SUCCESS;
         color:#fff;
         &:active {
            background: @BUTTON_SUCCESS_HOVER;
            border-color:@BUTTON_SUCCESS_HOVER;
            color:#fff;
        }
    } 
    &.warning {
         background: @BUTTON_WARNING;
         border-color:@BUTTON_WARNING;
         color:#fff;
         &:active {
            background: @BUTTON_WARNING_HOVER;
            border-color:@BUTTON_WARNING_HOVER;
            color:#fff;
        }
    }
    .simple-ui-icon {
        position:relative;
        top:.02rem;
    } 
}
</style>