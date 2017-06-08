<template>
   
     <div class="simple-ui-nav-parent">
          <a href="javascript:;" v-for="item in names.split(',')"   :style="styles"   class="simple-ui-nav-item">
            <Icon v-if="icon" :type="icon" size="14"></Icon>
            <span>{{item}}</span>
           </a>
           
         

     </div>



     
 
</template>
<script>
export default {
    name:'item',

    props:{
        icon:String,
        space:String,
        bgcolor:String,
        size:String,
        color:String,
        names:String
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
        .simple-ui-nav-parent{
            display:flex;
            width: 100%;
        }
        .simple-ui-nav-item {
            text-decoration: none;
            height: 100%;
            float: left;
            margin: 0 0.05rem;
            flex:1;
            color: rgb(77, 115, 204);
            position: relative;
            text-align:center;
           .simple-ui-icon{
            display: inline-block;
            color: #f40;
             
           }
         span{
            display: block; 
            width: 100%;
            text-align: center;
            height: 0.3rem;
            color: #f40;
            line-height: 0.3rem;
            position: absolute;
            top: 0.2rem;
         }
         
         
    
}
</style>