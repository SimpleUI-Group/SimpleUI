<template>
    <div class="simple-ui-plus-minus"
        :class="[
            size ? 'plus-minus-' + size : '',
            { 'is-disabled': disabled },
            { 'is-without-controls': !controls}
        ]"
    >
        <div
            v-if="controls"
            class="minus"
            :class="{'is-disabled': minDisabled}"
            v-repeat-click="minus"
        >-</div>
        <input
            v-model="currentValue"
            @keydown.up.prevent="plus"
            @keydown.down.prevent="minus"
            @focus="handleFocus"
            @blur="handleBlur"
            :disabled="disabled"
            :size="size"
            :max="max"
            :min="min"
            ref="input"
        >
        <div
            v-if="controls"
            class="plus"
            :class="{'is-disabled': maxDisabled}"
            v-repeat-click="plus"
        >+</div>
        <template slot="prepend" v-if="$slots.prepend">
            <slot name="prepend"></slot>
        </template>
        <template slot="append" v-if="$slots.append">
            <slot name="append"></slot>
        </template> 
    </div>
</template>
<script>
    export default {
        name: 'plus-minus',
        directives: {
            repeatClick: {
                bind(el, binding, vnode) {
                    let interval = null;
                    let startTime;
                    const handler = () => vnode.context[binding.expression].apply();
                    const clear = () => {
                        if (new Date() - startTime < 100) {
                            handler();
                            startTime = new Date();
                        }
                        clearInterval(interval);
                        interval = null;
                    };
                    const once = (el, event, fn) => {
                        var listener = function() {
                            if (fn) {
                                fn.apply(this, arguments);
                            }
                            el.removeEventListener(event, listener, false);
                        };
                        el.addEventListener(event, listener, false);
                    };
                    el.addEventListener('mousedown', () => {
                        startTime = new Date();
                        once(el, 'mouseleave', clear);
                        once(document, 'mouseup', clear);
                        clearInterval(interval);
                        interval = setInterval(handler, 100);
                    }, false);
                }
            }
        },
        props: {
            step: {
                type: Number,
                default: 1
            },
            max: {
                type: Number,
                default: Infinity
            },
            min: {
                type: Number,
                default: -Infinity
            },
            value: {
                default: 0
            },
            disabled: Boolean,
            size: String,
            controls: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                currentValue: 0,
                oldVal: 0
            };
        },
        watch: {
            value: {
                immediate: true,
                handler(value) {
                    let newVal = Number(value);
                    if (isNaN(newVal)) return;
                    if (newVal >= this.max) newVal = this.max;
                    if (newVal <= this.min) newVal = this.min;
                    this.currentValue = newVal;
                    this.$emit('input', newVal);
                }
            }
        },
        computed: {
            minDisabled() {
                return this._minus(this.value, this.step) < this.min;
            },
            maxDisabled() {
                return this._plus(this.value, this.step) > this.max;
            },
            precision() {
                const { value, step, getPrecision } = this;
                return Math.max(getPrecision(value), getPrecision(step));
            }
        },
        methods: {
            toPrecision(num, precision) {
                if (precision === undefined) precision = this.precision;
                return parseFloat(parseFloat(Number(num).toFixed(precision)));
            },
            getPrecision(value) {
                const valueString = value.toString();
                const dotPosition = valueString.indexOf('.');
                let precision = 0;
                if (dotPosition !== -1) {
                    precision = valueString.length - dotPosition - 1;
                }
                return precision;
            },
            _plus(val, step) {
                if (typeof val !== 'number') return this.currentValue;

                const precisionFactor = Math.pow(10, this.precision);

                return this.toPrecision((precisionFactor * val + precisionFactor * step) / precisionFactor);
            },
            _minus(val, step) {
                if (typeof val !== 'number') return this.currentValue;

                const precisionFactor = Math.pow(10, this.precision);

                return this.toPrecision((precisionFactor * val - precisionFactor * step) / precisionFactor);
            },
            plus() {
                if (this.disabled || this.maxDisabled) return;
                const value = this.value || 0;
                const newVal = this._plus(value, this.step);
                if (newVal > this.max) return;
                this.setCurrentValue(newVal);
            },
            minus() {
                if (this.disabled || this.minDisabled) return;
                const value = this.value || 0;
                const newVal = this._minus(value, this.step);
                if (newVal < this.min) return;
                this.setCurrentValue(newVal);
            },
            setCurrentValue(newVal) {
                const oldVal = this.currentValue;
                if (newVal >= this.max) newVal = this.max;
                if (newVal <= this.min) newVal = this.min;
                if (oldVal === newVal) return;
                this.$emit('change', newVal, oldVal);
                this.$emit('input', newVal);
                this.currentValue = newVal;
            },
            handleFocus(){
                this.oldVal = this.currentValue;
            },
            handleBlur() {
                let value = this.currentValue;
                if (/^-?\d*\.?\d*$/.test(this.currentValue)) {
                    if (value >= this.max) value = this.max;
                    if (value <= this.min) value = this.min;
                }else{
                    value = this.oldVal;
                }
                this.currentValue = value;
                this.$emit('change', value);
                this.$emit('input', value);
            },
        }
    };
</script>
<style lang="less">
@import '../../styles/index.less';
.simple-ui-plus-minus {
    display: inline-block;
    overflow: hidden;
    width: 140px;
    position: relative;
    font-size: 14px;
    &:hover input{
        border-color:#20a0ff;
    }
    &.is-disabled {
        input,.minus,.plus {
            cursor: not-allowed;
        }
        input {
            background-color: #eef1f6;
            border-color: #d1dbe5;
            color: #bbb;
        }
    }
    input {
        appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #bfcbd9;
        box-sizing: border-box;
        color: #1f2d3d;
        display: block;
        font-size: inherit;
        height: 36px;
        line-height: 1;
        outline: none;
        padding: 3px 40px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        text-align: center;
        -moz-appearance:textfield;
        &:focus {
            border-color:#20a0ff
        }
        &::-webkit-outer-spin-button,&::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
    .minus,.plus {
        height: auto;
        width: 36px;
        line-height: 34px;
        top: 1px;
        text-align: center;
        color: #97a8be;
        cursor: pointer;
        position: absolute;
        z-index: 1;
        user-select: none;
        font-weight: bold;
        &:hover {
            color: #20a0ff;
        }
        &.is-disabled {
            cursor: not-allowed;
            color: #d1dbe5;
        }
    }
    .minus {
        left: 0;
        border-right: 1px solid #bfcbd9;
    }
    .plus {
        right: 0;
        border-left: 1px solid #bfcbd9;
    }
    &.plus-minus-large {
        font-size: 16px;
        width: 160px;
        input {
            height: 42px;
        }
        .minus,.plus {
            width: 42px;
            line-height: 42px;
        }
    }
    &.plus-minus-small {
        font-size: 13px;
        width: 120px;
        input {
            height: 30px;
        }
        .minus,.plus {
            width: 30px;
            line-height: 30px;
        }
    }
}
</style>