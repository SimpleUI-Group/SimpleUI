<template>
    <div id="simple-list-container">
        <ul id="simple-list-content">
            <slot name="item">
                <li class="simple-list-item flex-rowstart-middle">
                    <div class="img"></div>
                    <div class="text-box">
                        <h2 class="title">居臣氏(铺上大道二店)</h2>
                        <p class="sub-title">超市&nbsp;爱琴海购物公园&nbsp;279m</p>
                        <div class="sign">
                            <span class="describe">奖励金商家</span>
                        </div>
                    </div>
                </li>
            </slot>
        </ul>
    </div>
</template>
<script>
import slideload from "./slideload.js";
export default {
    name:'list'
}
</script>
<style lang="less" scoped>
@import '../../styles/index.less';
@import '../../styles/classes.less';
#simple-list-container{
    width:100%; height:100%;
    overflow:auto;
    -webkit-overflow-scrolling: touch;
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