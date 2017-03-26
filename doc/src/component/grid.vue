<template>
<div class="box-contianer">
    <h1>Grid</h1>
    <p>我们提供<code>Row</code>和<code>Col</code>2组标签配合使用，将栅格划分为24份</p>
    <Docbox url="../../demo/dist/index.html#/component/grid-1">
        <Dl type="html">&lt;Row&gt;
    &lt;Col col="12"&gt;
        &lt;Button type="primary" pull edge&gt;col 12&lt;/Button&gt;
    &lt;/Col&gt;
    &lt;Col col="12"&gt;
        &lt;Button type="success" pull edge&gt;col 12&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="6"&gt;
        &lt;Button type="primary" pull edge&gt;col 6&lt;/Button&gt;
    &lt;/Col&gt;
    &lt;Col col="8"&gt;
        &lt;Button type="success" pull edge&gt;col 8&lt;/Button&gt;
    &lt;/Col&gt;
    &lt;Col col="4"&gt;
        &lt;Button type="primary" pull edge&gt;col 4&lt;/Button&gt;
    &lt;/Col&gt;
    &lt;Col col="6"&gt;
        &lt;Button type="success" pull edge&gt;col 6&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
        </Dl>
        <Dr>
            
        </Dr>
    </Docbox>

    <p>通过<code>space</code>属性可以指定每组<code>Col</code>之间的间隙</p>
    <Docbox url="../../demo/dist/index.html#/component/grid-2">
        <Dl type="html">&lt;Row space="10"&gt;
    &lt;Col col="12"&gt;
        &lt;Button type="primary" pull edge&gt;col 12&lt;/Button&gt;
    &lt;/Col&gt;
    &lt;Col col="12"&gt;
        &lt;Button type="success" pull edge&gt;col 12&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row space="20"&gt;
    &lt;Col col="6"&gt;
        &lt;Button type="primary" pull edge&gt;col 6&lt;/Button&gt;
    &lt;/Col&gt;
    &lt;Col col="8"&gt;
        &lt;Button type="success" pull edge&gt;col 8&lt;/Button&gt;
    &lt;/Col&gt;
    &lt;Col col="4"&gt;
        &lt;Button type="primary" pull edge&gt;col 4&lt;/Button&gt;
    &lt;/Col&gt;
    &lt;Col col="6"&gt;
        &lt;Button type="success" pull edge&gt;col 6&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
        </Dl>
        <Dr>
            
        </Dr>
    </Docbox>

    <p>通过<code>left</code>属性可以指定<code>Col</code>的偏移量</p>
    <Docbox url="../../demo/dist/index.html#/component/grid-3">
        <Dl type="html">&lt;Row&gt;
    &lt;Col col="4" left="2"&gt;
        &lt;Button type="primary" pull edge&gt;2&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="4" left="4"&gt;
        &lt;Button type="primary" pull edge&gt;4&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="4" left="6"&gt;
        &lt;Button type="primary" pull edge&gt;6&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="4" left="8"&gt;
        &lt;Button type="primary" pull edge&gt;8&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="4" left="12"&gt;
        &lt;Button type="primary" pull edge&gt;12&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="4" left="14"&gt;
        &lt;Button type="primary" pull edge&gt;14&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="4" left="16"&gt;
        &lt;Button type="primary" pull edge&gt;16&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="4" left="18"&gt;
        &lt;Button type="primary" pull edge&gt;18&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;
&lt;Row&gt;
    &lt;Col col="4" left="20"&gt;
        &lt;Button type="primary" pull edge&gt;20&lt;/Button&gt;
    &lt;/Col&gt;
&lt;/Row&gt;</Dl>
        <Dr>
            <code>left</code>取值为1-24
        </Dr>
    </Docbox>
</div>

</template>
<script>
export default {
    name:'grid'
}
</script>
<style>
</style>