<template>
    <div class="box-contianer">
        <header class="main-header">
            Simple-UI
            <small>美好的事情一直在发生</small>
        </header>
        <div class="main-left">
            <router-link to="/index">起步</router-link>
            <router-link to="/button">Button(按钮)</router-link>
            <router-link to="/icon">Icon(图标)</router-link>
            <router-link to="/grid">Grid(栅格)</router-link>
            <router-link to="/input">Input(输入框)</router-link>
            <router-link to="/nav">Nav(底部导航)</router-link>
            <router-link to="/plusminus">PlusMinus(加减输入框)</router-link>
        </div>
        <div class="main-right">
            <div class="main-body">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'main'
}
</script>
<style lang="less">
    .box-contianer {
        height:100%;
    }
    .main-header {
        height: 80px;
        background: #20a0ff;
        line-height: 80px;
        font-size:28px;
        color:#fff;
        text-indent:60px;
        position: absolute;
        top:0;
        left:0;
        width: 100%;
        z-index: 10;
        small {
            font-size: 16px;
            text-indent:20px;
            display:inline-block;
            position:relative;
            top:-2px;
        }
    }
    .main-left {
        width:200px;
        height:100%;
        float:left;
        background: #fff;
        color:#333;
        padding-top:100px;
        box-sizing: border-box;
        border-right:1px solid #f1f1f1;
        margin-right:-200px;
        position: relative;
        box-sizing: border-box;
        a {
            font-size:16px;
            line-height:36px;
            color:#333;
            text-decoration:none;
            display:block;
            text-indent:10px;
        }
    }
    .main-right {
        width:100%;
        float:right;
        height:100%;
        box-sizing: border-box;
        overflow-y: scroll;
        padding-right:20px;
        padding-top:80px;
        .main-body {
            margin-left:220px;
            padding-top:30px;
        }
    }
</style>