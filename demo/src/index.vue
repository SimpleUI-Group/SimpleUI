<template>
<div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="danger">Danger</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="primary" pull edge>Pull+Edge</Button>
    <Button type="primary" edge>Edge</Button>

    <Icon type="check" color="#00f" size="24"></Icon>

    <Button type="success" icon="loading">icon</Button>
    <Button type="warning" icon="check">icon</Button>
    <Button type="danger" icon="search">icon</Button>

    <PlusMinus v-model="num" :step="1" :min="-10" :max="100" @change="handleChange"></PlusMinus>
    <PlusMinus v-model="num2" :disabled="true"></PlusMinus>
    <PlusMinus v-model="num3" size="large" ></PlusMinus>
    <PlusMinus v-model="num4" size="small" ></PlusMinus>

</div>

</template>
<script>
export default {
    name:'index',
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