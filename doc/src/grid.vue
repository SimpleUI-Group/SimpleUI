<template>
<div>
    <Row>
        <Col col="6">
            <Button type="success" pull edge>col-6</Button>
        </Col>
        <Col col="12">
            <Button type="danger" pull edge>col-12</Button>
        </Col>
        <Col col="6">
            <Button type="warning" pull edge>col-6</Button>
        </Col>
    </Row>
    <Row>
        <Col col="24">
            <Button type="warning">col-24</Button>
        </Col>
    </Row>

    <Row space='10'>
        <Col col="6">
            <Button type="danger" pull>col-6</Button>
        </Col>
        <Col col="12">
            <Button type="primary" pull>col-12 (10px space)</Button>
        </Col>
        <Col col="6">
            <Button type="success" pull>col-6</Button>
        </Col>
    </Row>

    <Row>
        <Col col="4" left="2">
            <Button type="success">left 2</Button>
        </Col>
    </Row>
    <Row>
        <Col col="4" left="4">
            <Button type="success">left 4</Button>
        </Col>
    </Row>
    <Row>
        <Col col="4" left="8">
            <Button type="success">left 8</Button>
        </Col>
    </Row>

    <Row>
        <Col col="12" left="12">
            <Button type="success">col-12 (left 12)</Button>
        </Col>
    </Row>
</div>

</template>
<script>
export default {
    name:'grid'
}
</script>
<style>
</style>