<template>
    <div class="box-contianer" style="background:#fafafa;box-sizing:border-box;padding-top:1px;">
        <PlusMinus v-model="data_1"></PlusMinus>
        data_1:{{data_1}}
        <PlusMinus v-model="data_2" @change="handleChange"></PlusMinus>
        nums:{{nums}}
    </div>
</template>
<script>
    export default {
        name:"plusMinus-5",
        data: () => {
            return {
                data_1:'0',
                data_2:'0',
                nums:0
            }
        },
        methods: {
            handleChange(value) {
                this.nums = value;
            }
        }
    }
</script>