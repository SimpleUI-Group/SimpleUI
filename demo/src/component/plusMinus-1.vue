<template>
    <div class="box-contianer" style="background:#fafafa;box-sizing:border-box;padding-top:1px;">
        <PlusMinus v-model="data_1"></PlusMinus>
    </div>
</template>
<script>
    export default {
        name:"plusMinus-1",
        data: () => {
            return {
                data_1:'1'
            }
        }
    }
</script>