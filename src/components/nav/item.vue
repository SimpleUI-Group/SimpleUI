<template>
 
      <a href="javascript:;" :style="styles"  class="simple-ui-nav-item">
      <Icon v-if="icon" :type="icon" size="14" color="#fff"></Icon>
       <span>{{navNames}} </span>
                        <!-- <span><slot></slot></span>  -->
      </a>
     
 
</template>
<script>
export default {
    name:'item',
    props:{
        icon:String,
        name:String,
        space:String,
        bgcolor:String,
        size:String,
        color:String,
        navNames:String
        
        
    },
    
    computed:{
       
         styles() {
            return {
                "background": this.bgcolor ? `${this.bgcolor}` : '',
                "color": this.color ? `${this.color}` : '',
                "font-size": this.size ? `${this.size}px` : ''
            }
        }
    }
   
}
</script>

<style lang="less">
@import '../../styles/index.less';

        .simple-ui-nav-item {
            text-decoration: none;
            height: 100%;
            float: left;
            margin: 0 0.05rem;
            flex:1;
            position: relative;
           
         span{
            display: block; 
            width: 100%;
            text-align: center;
            height: 0.3rem;
            line-height: 0.3rem;
            margin-top: 0.18rem;
         }
         
    
}
</style>