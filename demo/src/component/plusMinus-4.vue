<template>
    <div class="box-contianer" style="background:#fafafa;box-sizing:border-box;padding-top:1px;">
        <PlusMinus v-model="data_1" :min="-5" :max="10"></PlusMinus>
        <PlusMinus v-model="data_2" :min="1" :max="3"></PlusMinus>
    </div>
</template>
<script>
    export default {
        name:"plusMinus-4",
        data: () => {
            return {
                data_1:'0',
                data_2:'0'
            }
        }
    }
</script>