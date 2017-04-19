<template>
    <div class="simple-ui-input-group" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'inputGroup',
}
</script>
<style lang="less">
    @import '../../styles/index.less';
    .simple-ui-input-group {
        overflow:hidden;
        margin:.15rem 0;
        .simple-ui-input-box:not(:nth-of-type(1)) {
            border-top:none;
        }
    }
</style>