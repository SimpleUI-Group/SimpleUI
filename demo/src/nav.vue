<template>
    <div class="demo-nav">
    	<Nav size="14">
    		 <NavItem bgcolor="#f40"  icon="loading" navNames="nav1" color="#fff"></NavItem>
             <NavItem bgcolor="#f40"  icon="loading" navNames="nav1" color="green"></NavItem>
             <NavItem bgcolor="pink" icon="loading" navNames="nav1" color="green"></NavItem>
             <NavItem bgcolor="pink"  navNames="nav1" color="green"></NavItem>
             <NavItem bgcolor="pink" icon="loading" navNames="nav1" color="green"></NavItem>
             <NavItem bgcolor="pink" icon="loading" navNames="nav1" color="green"></NavItem>
             
             
    	</Nav>
        
    </div>
</template>
<script>
    export default {
        name:'nav',
       
    };
</script>
<style lang="less">

.demo-nav{
    width:100%; 
    height:100%;
    
}
.simple-ui-icon {
        position:relative;
        
    } 
</style> 