<template>
    <div class="simple-ui-input-box" :class="classes">
        <label class="simple-ui-input-label">{{label}}</label>
        <input :type="type" class="simple-ui-input-input" :name="name" :value="value" :placeholder="placeholder" @input="onInput">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'input',
    props: {
        type: String,
        placeholder: String,
        value: String,
        label: String,
        name: String,
        underline: Boolean
    },
    computed: {
        classes() {
            return {
                'simple-ui-input-underline': !!this.underline
            }
        }
    },
    methods: {
        onInput(ev) {
            this.$emit('input', ev.target.value);
        }
    }
}
</script>
<style lang="less">
    @import '../../styles/index.less';
    .simple-ui-input-box {
        padding:0 .15rem;
        overflow:hidden;
        border-top:1px solid @DEFAULT_BORDER_COLOR;
        border-bottom:1px solid @DEFAULT_BORDER_COLOR;
        background:#fff;
        position:relative;
        &.simple-ui-input-underline {
            background:none;
            border-top:none;
            input {
                background:none;
            }
        }
        label {
            min-width:.75rem;
            float:left;
            height:.44rem;
            line-height:.44rem;
        }
        input {
            float:left;
            height:.24rem;
            padding:.1rem;
            border:none;
            outline:none;
            width:2.5rem;
        }
        .simple-ui-button, img {
            width:.75rem;
            height:.44rem;
            position:absolute;
            right:-.15rem;
            top:-.1rem;
            line-height:.44rem;
            font-size:12px;
            border-radius:0;
            border-top:none;
            border-right:none;
            border-bottom:none;
        }
        img {
            top:0;
            right:0;
            height:.34rem;
            padding:.05rem 0;
            border-left:1px solid @BUTTON_DEFAULT_BORDER;
        }
    }
</style>