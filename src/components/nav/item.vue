<template>
 
      <a href="javascript:;" :style="styles"  >
      {{navNames}} 
      <Icon v-if="icon" :type="icon" size="14" color="#fff"></Icon>
                        <span><slot></slot></span> 
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

        a{
            text-decoration: none;
            height: 100%;
            float: left;
            margin: 0 0.05rem;
            background: #187b92;
            border-radius: 0.1rem;
            color: #fff;
            flex:1;
            &:hover {
             background: #f30;
         }
         
    
}
</style>