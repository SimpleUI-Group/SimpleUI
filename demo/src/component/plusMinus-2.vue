<template>
    <div class="box-contianer" style="background:#fafafa;box-sizing:border-box;padding-top:1px;">
        <PlusMinus v-model="data_1"></PlusMinus>
        <PlusMinus v-model="data_2" disabled></PlusMinus>
        <PlusMinus v-model="data_3" size="small" ></PlusMinus>
        <PlusMinus v-model="data_4"size="large" ></PlusMinus>
    </div>
</template>
<script>
    export default {
        name:"plusMinus-2",
        data: () => {
            return {
                data_1:'1',
                data_2:'1',
                data_3:'1',
                data_4:'1'
            }
        }
    }
</script>