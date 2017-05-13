<template>
    <div class="demo-list">
        <List infinite @load="loadHandle" refresh>
            <div slot="items" v-for="n in num" class="simple-list-item flex-rowstart-middle">
                <div class="img"></div>
                <div class="text-box">
                    <h2 class="title">居臣氏(铺上大道二店)</h2>
                    <p class="sub-title">超市&nbsp;爱琴海购物公园&nbsp;279m</p>
                    <div class="sign">
                        <span class="describe">奖励金商家</span>
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
                num: 0
            };
        },
        methods:{
            loadHandle(next, stop, error){
                setTimeout(() => {
                    this.num += 10;
                    next();
                },1000);
            }
        },
        mounted () {
            
        }
    };
</script>
<style lang="less">
.demo-list{
    width:100%; height:100%;
    background-color:#f5f5f9;
}
</style>