<template>
    <div class="box-contianer" style="background:#fafafa;box-sizing:border-box;padding-top:1px;">
        <Input type="text"
            label="手机" 
            placeholder="请输入手机号码">
            <Button>获取验证码</Button>
        </Input>
        <br>
        <Input type="text"
            label="验证码" 
            placeholder="请输入图形验证码">
            <img src="http://i2.muimg.com/567571/fd0e77b92e0160c0.jpg">
        </Input>
    </div>
</template>
<script>
    export default {
        name:"input-4"
    }
</script>