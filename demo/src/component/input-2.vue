<template>
    <div class="box-contianer" style="background:#fafafa;box-sizing:border-box;padding-top:1px;">
        <InputGroup>
            <Input type="text"
                label="姓名" 
                placeholder="请输入姓名">
            </Input>
            <Input type="number" 
                label="手机" 
                placeholder="请输入手机号码">
            </Input>
            <Input type="mail" 
                label="邮箱"
                placeholder="请输入邮箱">
            </Input>
        </InputGroup>
    </div>
</template>
<script>
    export default {
        name:"input-2"
    }
</script>