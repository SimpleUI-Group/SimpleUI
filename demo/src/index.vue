<template>
<div style="background:#fafafa">
   <!-- <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="danger">Danger</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="primary" pull edge>Pull+Edge</Button>
    <Button type="primary" edge>Edge</Button>

    <Icon type="check" color="#00f" size="24"></Icon>

    <Button type="success" icon="loading">icon</Button>
    <Button type="warning" icon="check">icon</Button>
    <Button type="danger" icon="search">icon</Button>-->
    <div style="height:5px;"></div>
    <InputGroup>
        <Input 
            type="text" 
            placeholder="text" 
            v-model="test" 
            label="test" 
            name="testname"
            @input="getValue" 
        >
        </Input>

        <Input 
            type="text" 
            placeholder="text" 
            v-model="test2" 
            label="test" 
            name="testname"
        >
        </Input>
    </InputGroup>

    <InputGroup>
        <Input 
            type="text" 
            placeholder="text" 
            v-model="test2" 
            label="test" 
            name="testname"
            underline
        >
        </Input>
    </InputGroup>

    <InputGroup>
        <Input 
            type="text" 
            placeholder="text" 
            v-model="test2" 
            label="test" 
            name="testname"
        >
        <Button >获取验证码</Button>
        </Input>
    </InputGroup>

    <InputGroup>
        <Input 
            type="text" 
            placeholder="text" 
            v-model="test2" 
            label="test" 
            name="testname"
        >
        <img src="http://i2.muimg.com/567571/fd0e77b92e0160c0.jpg">
        </Input>
    </InputGroup>
</div>

</template>
<script>
export default {
    name:'index',
    data(){
        return {
            test:'1',
            test2:'2'
        }
    },
    methods: {
        getValue(value) {
            console.log(value)
        }
    }
}
</script>
<style>
</style>