<template>

    <div class="simple-ui-nav" :class="classes" >
        <ul>
            <li >
            <i :class="{ 'simple-ui-icon iconfont  simple-ui-rotate': isA, 'icon-loading': isNeedIcon}" ></i>
                <span>Nav 1</span>
            </li>
            <li>
                <i :class="{ 'simple-ui-icon iconfont  ': isA, 'icon-search': isNeedIcon}" ></i>
                <span>Nav 2</span> 
            </li>
            <li>
               <i :class="{ 'simple-ui-icon iconfont  ': isA, 'icon-check': isNeedIcon}" ></i>
               <span>Nav 3</span> 
           </li>

       </ul>
       <ul>
        <li >Nav 1</li>
        <li >Nav 2</li>
        <li >Nav 3</li>

        
    </ul>

</div>

</template>
<script>
    export default {
        name:'nav',
        props:{
            type: String,
            pull: Boolean,
            edge: Boolean,
            icon:String
        },
        data:function(){
            return {
              isA: true,  //当isA改变时，将更新class
              isNeedIcon: true    //当isNeedIcon改变时，将更新class
          }
      },
      computed: {
        classes() {
            return {
                // [this.type] : this.type,
                // 'simple-ui-button-pull': !!this.pull,
                // 'simple-ui-button-edge': !!this.edge
            }
        }
    }

}
</script>
<style lang="less">
    @import '../../styles/index.less';
    .simple-ui-nav {
    // position: fixed;
    // bottom:0;
    width: 100%;
    text-align:center;
    display:block;
    width:92%;
    height: @BUTTON_HEIGHT;
    margin:.1rem 4%;
    line-height: @BUTTON_HEIGHT;
    border-radius:4px;
    box-sizing:border-box;
    
    ul{
        width: 100%;
        height: 100%;
        list-style: none;
        overflow: hidden;
        margin:10px 0;
        li{
            position: relative;
            width: 20%;
            height: 100%;
            float: left;
            margin: 0 0.05rem;
            background: #187b92;
            border-radius: 0.1rem;
            color: #fff;
            &:hover {
             background: #f30;
         }
         i{
            display: block;
            font-size: 20px;
            color: rgb(255, 255, 255);

            position: absolute;
            left: 0.05rem;
            top: 0;
        }
        span{
            display: block;
            position: absolute;
            left: 0.15rem;
            width: 80%;
            height: 50%;
        }
    }
}


}


</style>