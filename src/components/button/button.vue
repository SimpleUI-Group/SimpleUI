<template>
<div class="simple-ui-button text-center">
    <span>文字</span>
</div>
</template>
<script>
export default {
    name:'button'
}
</script>
<style lang="less">
.simple-ui-button {
    width:3.75rem;
    height:.36rem;
    line-height: .36rem;
    background: #00f;
    color:#fff;
    &.margin {
        width: 3.43rem;
        margin:0 .16rem;
    }
}
</style>