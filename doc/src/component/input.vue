<template>
<div class="box-contianer">
    <h1>Input</h1>
    <p>我们提供了Input标签来使用组件</p>
    <Docbox url="../../demo/dist/index.html#/component/input-1">
        <Dl type="html">&lt;Input type="text"
    label="文本" 
    @input="getTextInfo" 
    placeholder="文本输入"&gt;
&lt;/Input&gt;
&lt;Input type="number" 
    label="数字"
    @input="getNumberInfo" 
    placeholder="数字输入"&gt;
&lt;/Input&gt;
&lt;Input type="mail" 
    label="邮箱"
    @input="getMailInfo" 
    placeholder="邮箱输入"&gt;
&lt;/Input&gt;</Dl>
        <Dr>
            使用<code>type</code>属性指定input 的类型，参考原生input，全部支持
            使用<code>label</code>属性指定输入框的label
            使用<code>placeholder</code>属性指定输入框的placholder
            使用<code>input</code>事件获取输入框的输入事件所返回的值
            使用<code>name</code>属性指定输入框的name

        </Dr>
    </Docbox>

    <p>如果需要一组表单可以使用<code>InputGroup</code>组件将表单组包裹</p>
    <Docbox url="../../demo/dist/index.html#/component/input-2">
        <Dl type="html">&lt;InputGroup&gt;
    &lt;Input type="text"
        label="姓名" 
        @input="getTextInfo" 
        placeholder="请输入姓名"&gt;
    &lt;/Input&gt;
    &lt;Input type="number" 
        label="手机"
        @input="getNumberInfo" 
        placeholder="请输入手机号码"&gt;
    &lt;/Input&gt;
    &lt;Input type="mail" 
        label="邮箱"
        @input="getMailInfo" 
        placeholder="请输入邮箱"&gt;
    &lt;/Input&gt;
&lt;/InputGroup&gt;</Dl>
        <Dr>
            通过<code>InputGroup</code>的包裹，可以让表单组更好的样式和ui呈现，我们在内部做了很多处理
        </Dr>
    </Docbox>

    <p>使用<code>underline</code>属性可以去除背景以及多余边框</p>
    <Docbox url="../../demo/dist/index.html#/component/input-3">
        <Dl type="html">&lt;Input type="text"
    label="姓名" 
    @input="getTextInfo" 
    placeholder="请输入姓名"
    underline&gt;
&lt;/Input&gt;</Dl>
        <Dr>
            去掉了背景和边框，只保留了下边框
        </Dr>
    </Docbox>

    <p>嵌套<code>Button</code>组件或者<code>img</code>标签还可以做到功能性的效果</p>
    <Docbox url="../../demo/dist/index.html#/component/input-4">
        <Dl type="html">&lt;Input type="text"
    label="手机" 
    @input="getTextInfo" 
    placeholder="请输入手机号码"&gt;
    &lt;Button&gt;获取验证码&lt;/Button&gt;
&lt;/Input&gt;
&lt;Input type="text"
    label="验证码" 
    @input="getTextInfo" 
    placeholder="请输入图形验证码"&gt;
    &lt;img src="http://i2.muimg.com/567571/fd0e77b92e0160c0.jpg"&gt;
&lt;/Input&gt;</Dl>
        <Dr>
           
        </Dr>
    </Docbox>
</div>

</template>
<script>
export default {
    name:'input'
}
</script>
<style>
</style>