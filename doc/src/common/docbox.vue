<template>
    <section>
        <header class="docbox-header">
            Demo代码
            <Row>
                <Col col=24>
                    <Button type="primary" pull @click="showPhone">演示</Button>
                </Col>
            </Row>
        </header>
        <div class="docbox-main">
            <slot></slot>            
        </div>
        <phone :is-show="isShow" :url="url" @isNone="onNone"></phone>
    </section>
</template>
<script>
import phone from './phone.vue';
export default {
    name:'Docbox',
    data(){
        return {
            isShow:'phone-none',
        }
    },
    props:['url'],
    components:{
        phone,
    },
    methods:{
        showPhone() {
            this.isShow = 'phone-block';
        },
        onNone(cs) {
            this.isShow = cs;
        }
    }
}
</script>