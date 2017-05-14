<template>
    <div class="demo-list">
        <List infinite @load="loadHandle" refresh @refresh="refreshHandle">
            <div slot="items" v-for="n in num" class="simple-list-item flex-rowstart-middle">
                <div class="img"></div>
                <div class="text-box">
                    <h2 class="title">我是一条标题，您可以自定义标题内容</h2>
                    <p class="sub-title">我是一条副标题，您可以自定义副标题内容</p>
                    <div class="sign">
                        <span class="describe">我是一个标签，您可以自定义标签内容</span>
                    </div>
                </div>
            </div>
        </List>
    </div>
</template>
<script>
    export default {
        name:'list',
        data(){
            return {
                num: 0,
                n: 1
            };
        },
        methods:{
            loadHandle (next, stop, error) {
                setTimeout(() => {
                    this.num += 10;
                    this.n += 1;
                    if (this.n > 2) {
                        stop();
                        return;
                    }
                    next();
                },1000);
            },
            refreshHandle (next, error) {
                setTimeout(() => {
                    this.num = 10;
                    next();
                },1000);
            }
        }
    };
</script>
<style lang="less">
.demo-list{
    width:100%; height:100%;
    background-color:#f5f5f9;
}
</style>