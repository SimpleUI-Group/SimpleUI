<template>
    <div class="box-contianer" style="background:#fafafa;box-sizing:border-box;padding-top:1px;">
        <PlusMinus v-model="data_1" step="2"></PlusMinus>
        <PlusMinus v-model="data_2" step="5"></PlusMinus>
        <PlusMinus v-model="data_3" step="10"></PlusMinus>
    </div>
</template>
<script>
    export default {
        name:"plusMinus-3",
        data: () => {
            return {
                data_1:'2',
                data_2:'5',
                data_3:'10'
            }
        }
    }
</script>