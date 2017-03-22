<template>
<div class="simple-ui-row">
    <slot></slot>
</div>
</template>
<script>
export default {
    name:'row',
    props:{
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
.simple-ui-row {
    box-sizing: border-box;
    position: relative;
}
</style>