<template>
    <div ref="scrollWindow" class="simple-list-container">
        <div class="load-hint">
            <slot name="pull-hint" v-if="refreshStatus === 0">
                <div class="simple-list-loading-box">
                    <p class="simple-list-loading-text">下拉刷新</p>
                </div>
            </slot>
            <slot name="release-hint" v-if="refreshStatus === 1">
                <div class="simple-list-loading-box">
                    <p class="simple-list-loading-text">释放即可刷新</p>
                </div>
            </slot>
            <slot name="refreshing" v-if="refreshStatus === 2">
                <div class="simple-list-loading-box">
                    <Icon class="simple-list-loading-icon" type="loading" size="22"></Icon>
                    <p class="simple-list-loading-text">正在努力刷新…</p>
                </div>
            </slot>
            <slot name="refresh-success" v-if="refreshStatus === 3">
                <div class="simple-list-loading-box">
                    <p class="simple-list-loading-text">刷新成功！</p>
                </div>
            </slot>
            <slot name="refresh-error" v-if="refreshStatus === 4">
                <div class="simple-list-loading-box">
                    <p class="simple-list-loading-text">刷新失敗！</p>
                </div>
            </slot>
        </div>
        <div ref="scrollContent" class="simple-list-content">
            <slot name="items"></slot>
            <div class="load-hint" @click="retry">
                <slot name="loading" v-if="loading && infinite">
                    <div class="simple-list-loading-box">
                        <Icon class="simple-list-loading-icon" type="loading" size="22"></Icon>
                        <p class="simple-list-loading-text">正在努力加载…</p>
                    </div>
                </slot>
                <slot name="load-success" v-if="loadStatus === 1">
                    <div class="simple-list-loading-box">
                        <p class="simple-list-loading-text">加载成功！</p>
                    </div>
                </slot>
                <slot name="load-error" v-if="loadStatus === 2">
                    <div class="simple-list-loading-box">
                        <p class="simple-list-loading-text">加载失敗了，点我重试吧</p>
                    </div>
                </slot>
                <slot name="load-forbiddance" v-if="loadStatus === 3">
                    <div class="simple-list-loading-box">
                        <p class="simple-list-loading-text">我是有底线的！</p>
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
import TWEEN from 'tween.js';
import Slideload from './slideload.js';
export default {
    name:'list',
    props:{
        //是否开启无限滚动功能
        infinite: {
            type: Boolean,
            default: false
        },
        //是否开启下拉刷新功能
        refresh: {
            type: Boolean,
            default: false
        },
        //无限滚动提前加载距离
        threshold: {
            type: String,
            default: ''
        }
    },
    data () {
        return {
            slideload: null,
            loading:false, //是否正在加载
            loadStatus: 2, //0: 未执行, 1: 成功, 2: 失败, 3: 禁止执行
            refreshing: false, //是否正在刷新
            refreshStatus: 0 //0: 下拉刷新, 1: 释放刷新, 2:正在刷新, 3: 刷新成功, 4: 刷新失败
        };
    },
    computed:{
        
    },
    methods: {
        next () {
            this.slideload.next();
            if (this.loading) {
                this.loading = false;
                this.loadStatus = 1;
                setTimeout(() => {
                    this.loadStatus = 0;
                },800);
                return;
            }
            this.slideload.recover();
            this.refreshStatus = 3;
            setTimeout(() => {
                this.refreshStatus = 0;
            },800);
        },
        error () {
            this.slideload.next();
            if (this.loading) {
                this.loading = false;
                this.loadStatus = 2;
                return;
            }
            this.refreshStatus = 4;
            setTimeout(() => {
                this.refreshStatus = 0;
            },800);
        },
        stop () {
            this.slideload.stop();
            this.loading = false;
            this.loadStatus = 3;
        },
        retry () {
            if (this.loadStatus !== 2) return;
            this.slideload.lock("load");
            this.slideload.triggerLoad();
        }
    },
    mounted () {
        let options = {
            scrollCont:this.$refs.scrollContent,
            vm: this
        };
        if (this.threshold !== '') {
            options.threshold = Number(this.threshold);
        }
        this.slideload = new Slideload(this.$refs.scrollWindow,options);
        if (this.infinite) {
            this.slideload.on('load', () => {
                this.loadStatus = 0;
                this.loading = true;
                /**  
                    自定义事件'load', 列表滚动到底部触发
                    父组件在该事件的回调函数里向服务器请求数据
                    ↓ next, stop, error 这三个函数作为事件回调函数的参数, 根据不同的请求状态手动调用 ↓
                      1. 如果请求成功并且还有数据 => next()
                      2. 如果请求失败 => error()
                      3. 如果请求成功, 但是没有更多数据了 => stop()
                 */
                this.$emit('load', this.next, this.stop, this.error);
            });
        }
        if (this.refresh) {
            this.slideload.on('refresh', () => {
                this.refreshStatus = 2;
                /**  
                    自定义事件'refresh', 下拉距离超过50px并且手指释放后触发
                    父组件在该事件的回调函数里向服务器请求数据
                    ↓ next, error 这两个函数作为事件回调函数的参数, 根据不同的请求状态手动调用 ↓
                      1. 如果如果刷新成功 => next()
                      2. 如果请求失败 => error()
                 */
                this.$emit('refresh', this.next, this.error);
            });
        }
    }
}
</script>
<style lang="less">
@import '../../styles/index.less';
@import '../../styles/classes.less';
.simple-list-container{
    position:relative;
    width:100%; height:100%;
    overflow:auto;
    -webkit-overflow-scrolling: touch;
    .load-hint{
        width: 100%; height: 44px;
        background-color:#f5f5f9;
    }
}
.simple-list-content{
    position:absolute; top:0; left:0;
    width:100%;
}
.simple-list-loading-box{
    width:100%; height:44px;
    text-align:center;
    &::before{
        .inline-middle();
    }
}
.simple-list-loading-icon,
.simple-list-loading-text{
    display:inline-block;
    vertical-align:middle;
}
.simple-list-loading-text{
    font-size:15px;
}
.simple-list-item{
    box-sizing:border-box;
    height:96px;
    padding:0 15px;
    background-color:#fff;
    margin-top:4px;
    .img{
        display:block;
        width:66px; height:66px;
        background-color:#ccc;
        margin-right:10px;
    }
    .text-box{
        height:66px; line-height:1;
        .title{
            line-height:inherit;
            font-size:14px; color:#383838;
            margin:4px 0 8px 0;
        }
        .sub-title{
            line-height:inherit;
            font-size:12px; color:#888;
            margin-bottom:6px;
        }
        .sign{
            display:inline-block; vertical-align:top;
            height:20px;
            padding:0 5px;
            background-color:#fff3f3;
            border-radius:4px;
            overflow:hidden;
            .describe{
                float:left;
                line-height:20px;
                font-size:11px; color:#fb6165;
            }
        }
    }
}
</style>