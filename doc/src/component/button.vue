<template>
<div class="box-contianer">
    <h1>Button</h1>
    <p>我们提供了很多颜色供选择</p>
    <Docbox url="../../demo/dist/index.html#/component/button-1">
        <Dl type="html">&lt;Button&gt;Default&lt;/Button&gt;
&lt;Button type="primary"&gt;Primary&lt;/Button&gt;
&lt;Button type="warning"&gt;Warning&lt;/Button&gt;
&lt;Button type="danger"&gt;Danger&lt;/Button&gt;
&lt;Button type="success"&gt;Success&lt;/Button&gt;</Dl>
        <Dr>
            总共有
            <code>default</code>
            <code>primary</code>
            <code>warning</code>
            <code>danger</code>
            <code>success</code>
            五种类型的按钮样式，通过<code>type</code>属性传递，
            默认不传为<code>default</code>
        </Dr>
    </Docbox>

    <p>通过<code>icon</code>属性可以生成带图标的按钮</p>
    <Docbox url="../../demo/dist/index.html#/component/button-2">
        <Dl type="html">&lt;Button type="primary" icon="loading"&gt;Loading&lt;/Button&gt;
&lt;Button type="warning" icon="search"&gt;Search&lt;/Button&gt;
&lt;Button type="danger" icon="check"&gt;Check&lt;/Button&gt;</Dl>
        <Dr>
            关于icon的值可以参考Icon组件的文档
        </Dr>
    </Docbox>

    <p>通过<code>pull</code>以及<code>edge</code>可以使按钮定制更加多样化</p>
    <Docbox url="../../demo/dist/index.html#/component/button-3">
        <Dl type="html">&lt;Button type="primary" pull&gt;Pull&lt;/Button&gt;
&lt;Button type="warning" edge&gt;Edge&lt;/Button&gt;
&lt;Button type="danger" pull edge&gt;Pull+Edge&lt;/Button&gt;</Dl>
        <Dr>
            <code>pull</code>使得按钮没有margin值占满外层容器
            <code>edge</code>去掉圆角，呈现出直角按钮
        </Dr>
    </Docbox>
</div>

</template>
<script>
export default {
    name:'button'
}
</script>
<style>
</style>