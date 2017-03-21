<template>
<i class="simple-ui-icon iconfont" :class="classes" :style="styles"></i>
</template>
<script>
export default {
    name:'button',
    props:{
        type: String,
        size: String,
        color: String
    },
    computed: {
        classes() {
            return {
                'icon-loading':this.type == 'loading',
                'icon-check':this.type == 'check',
                'icon-search':this.type == 'search',
                'simple-ui-rotate':this.type == 'loading'
            }
        },
        styles() {
            return {
                'font-size':this.size + 'px',
                'color': this.color
            }
        }
    }
}
</script>
<style lang="less">
@import '../../styles/index.less';
.simple-ui-rotate {
    .simple-ui-roate();
}
</style>