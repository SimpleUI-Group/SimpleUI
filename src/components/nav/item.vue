<template>
  <ul class="simple-ui-NavItem" >
      <li :style="styles"  v-for="todo in navNames.split(',')">
       {{todo}}
      </li>
     
  </ul>
</template>
<script>
export default {
    name:'item',
    props:{
        icon:String,
        name:String,
        space:String,
        bgcolor:String,
        color:String,
        number:String,
        navNames:String
        
        
    },
     created() {
        // console.log('navNames:' + this.navNames);
        // this.navNames_arr = this.navNames.split(",");
        // console.log(this.navNames_arr)
    },
    computed:{
       
         styles() {
            return {
                "background": this.bgcolor ? `${this.bgcolor}` : '',
                "color": this.color ? `${this.color}` : ''
            }
        }
    }
   
}
</script>

<style lang="less">
@import '../../styles/index.less';
.simple-ui-NavItem {

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
         
    }
}
</style>