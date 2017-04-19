<template>
    <div class="box-contianer" style="background:#fafafa;box-sizing:border-box;padding-top:1px;">
        <Input type="text"
            label="文本" 
            placeholder="文本输入">
        </Input>
        <br>
        <Input type="number" 
            label="数字"
            placeholder="数字输入">
        </Input>
        <br>
        <Input type="mail" 
            label="邮箱"
            placeholder="邮箱输入">
        </Input>
    </div>
</template>
<script>
    export default {
        name:"input-1"
    }
</script>