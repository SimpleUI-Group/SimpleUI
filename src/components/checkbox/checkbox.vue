<template>
    <div class="simple-ui-checkbox-box" :class="classes">
        <label class="simple-ui-checkbox-label">
            <input type="checkbox" class="simple-ui-checkbox-input" :name="name" :value="value" @click="onClick">
            <div class="simple-ui-checkbox-body" :style="styles">
                <div class="simple-ui-checkbox-body-bg">
                    <Icon type="check"></Icon>
                </div>
            </div>
            <div class="simple-ui-checkbox-txt">
                <slot></slot>
            </div>
        </label>
    </div>
</template>
<script>
export default {
    name:'input',
    props: {
        type: String,
        value: String,
        name: String,
        value: String,
        bg: String
    },
    computed: {
        classes() {
            return {
                'simpleui-input-checkbox-round': this.type == 'round',
                'simpleui-input-checkbox-block': this.type == 'block'
            }
        },
        styles() {
            return {
                'background-color': this.bg
            }
        }
    },
    methods: {
        onClick(ev) {
            this.$emit('click', {
                [ev.target.value] : !! ev.target.checked
            });
        }
    }
}
</script>
<style lang="less">
    @import '../../styles/index.less';
    .simple-ui-checkbox-box {
        overflow:hidden;
        display:inline-block;
        label {
            width:100%;
            height:100%;
            display:block;
            padding:0 .05rem;
            box-sizing:border-box;
            overflow:hidden;
            input[type="checkbox"] {
               width:0;
               height:0;
               opacity:0;

               &:checked {
                    &~ .simple-ui-checkbox-body {
                        width:.14rem;
                        height:.14rem;
                        border:none;
                        .simple-ui-checkbox-body-bg {
                            background:none;
                        }
                    }
               }
            }
            .simple-ui-checkbox-body {
               float:left; 
               position:relative;
               top:.05rem;
               width:.12rem;
               height:.12rem;
               border:.01rem solid @BUTTON_DEFAULT_BORDER;
               border-radius:2px;
               overflow:hidden;
               background:@BUTTON_PRIMARY;
               .simple-ui-checkbox-body-bg {
                   width:100%;
                   height:100%;
                   background:#fff;
                   i {
                        width: .12rem;
                        font-size: .12rem;
                        height: 12px;
                        position: relative;
                        top: -.06rem;
                        left:.01rem;
                        color:#fff;
                   }
               }
            }
            .simple-ui-checkbox-txt {
                float:left;
                margin-left:.05rem;
            }
        }
        &.simpleui-input-checkbox-round {
            .simple-ui-checkbox-body {
                border-radius:50%;
                width:.14rem;
                height:.14rem;
                position:relative;
                top:.035rem;
                .simple-ui-checkbox-body-bg i {
                    width: .14rem;
                    height: .14rem;
                    font-size:.14rem;
                    top:-.05rem;
                    left:0;
                }
            }
            label input[type="checkbox"]:checked ~ .simple-ui-checkbox-body {
                width:.16rem;
                height:.16rem;
            }
        }
        &.simpleui-input-checkbox-block {
            .simple-ui-checkbox-label {
                border:1px solid #f1f1f1;
                height:.34rem;
                line-height:.34rem;
                min-width:.7rem;
                text-align:center;
                .simple-ui-checkbox-body {
                    display:none;
                }
                .simple-ui-checkbox-txt {
                    display:inline;
                    float:none;
                }
            }
            input[type="checkbox"]:checked ~ .simple-ui-checkbox-body {
               display:block;
            }
        }
    }
</style>