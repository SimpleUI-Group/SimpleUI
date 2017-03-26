<template>
    <div class="box-contianer">
        <Row space="10">
            <Col col="12">
                <Button type="primary" pull edge>col 12</Button>
            </Col>
            <Col col="12">
                <Button type="success" pull edge>col 12</Button>
            </Col>
        </Row>
        <Row space="20">
            <Col col="6">
                <Button type="primary" pull edge>col 6</Button>
            </Col>
            <Col col="8">
                <Button type="success" pull edge>col 8</Button>
            </Col>
            <Col col="4">
                <Button type="primary" pull edge>col 4</Button>
            </Col>
            <Col col="6">
                <Button type="success" pull edge>col 6</Button>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        name:"grid-2"
    }
</script>