<template>
<div>
    <PlusMinus v-model="num" :step="2" :min="-10" :max="100" @change="handleChange"></PlusMinus>
    <PlusMinus v-model="num2" :disabled="true"></PlusMinus>
    <PlusMinus v-model="num3" size="large" ></PlusMinus>
    <PlusMinus v-model="num4" size="small" ></PlusMinus>
</div>

</template>
<script>
export default {
    name:'number',
    data() {
        return {
            num: 1,
            num2: 1,
            num3: 1,
            num4: 1,
        }
    },
    methods: {
        handleChange(value) {
            console.log(value);
        }
    }
}
</script>
<style>
</style>