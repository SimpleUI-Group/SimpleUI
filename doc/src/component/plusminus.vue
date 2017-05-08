<template>
<div class="box-contianer">
    <h1>PlusMinus</h1>
    <p>通过<code>PlusMinus</code>标签,可以生成加减输入框组件</p>
    <Docbox url="../../demo/dist/index.html#/component/plusMinus-1">
        <Dl type="html">&lt;PlusMinus v-model="data_1"&gt;&lt;/PlusMinus&gt;</Dl>
        <Dr>
            <code>v-model</code> 用于数据传递与绑定
        </Dr>
    </Docbox>

    <p>设置<code>size</code>属性可以生成不同大小的组件, 通过<code>disabled</code>控制组件是否是禁用</p>
    <Docbox url="../../demo/dist/index.html#/component/plusMinus-2">
        <Dl type="html">&lt;PlusMinus v-model="data_1"&gt;&lt;/PlusMinus&gt;
&lt;PlusMinus v-model="data_2" disabled&gt;&lt;/PlusMinus&gt;
&lt;PlusMinus v-model="data_3" size="small"&gt;&lt;/PlusMinus&gt;
&lt;PlusMinus v-model="data_4"size="large"&gt;&lt;/PlusMinus&gt;</Dl>
        <Dr></Dr>
    </Docbox>

    <p>通过<code>step</code>可以使按钮每次更改的值常量</p>
    <Docbox url="../../demo/dist/index.html#/component/plusMinus-3">
        <Dl type="html">&lt;PlusMinus v-model="data_1" step="2"&gt;&lt;/PlusMinus&gt;
&lt;PlusMinus v-model="data_2" step="5"&gt;&lt;/PlusMinus&gt;
&lt;PlusMinus v-model="data_3" step="10"&gt;&lt;/PlusMinus&gt;</Dl>
        <Dr>
            <code>step</code>可以设置每次点击 + 或者  - 的 时候 增加 或者减少的值
        </Dr>
    </Docbox>

    <p>通过<code>min</code><code>max</code>可以设置最大最小值</p>
    <Docbox url="../../demo/dist/index.html#/component/plusMinus-4">
        <Dl type="html">&lt;PlusMinus v-model="data_1" :min="-5" :max="10"&gt;&lt;/PlusMinus&gt;
&lt;PlusMinus v-model="data_2" :min="1" :max="3"&gt;&lt;/PlusMinus&gt;</Dl>
        <Dr></Dr>
    </Docbox>

    <p>可以直接通过传入的<code>v-model</code>取到值(双向绑定), 也可以通过<code>change</code>事件获取更改后的值</p>
    <Docbox url="../../demo/dist/index.html#/component/plusMinus-5">
        <Dl type="html">&lt;PlusMinus v-model="data_1"&gt;&lt;/PlusMinus&gt;
data_1:{{'{' + '{data_1}' + '}'}}
&lt;PlusMinus v-model="data_2" @change="handleChange"&gt;&lt;/PlusMinus&gt;
nums:{{'{' + '{nums}' + '}'}}</Dl>
        <Dl type="javascript">data:() =>({
    data_1:1,
    data_2:1,
    nums:0
}),
methods: {
    handleChange(value) {
        this.nums = value;
    }
}</DL>
        <Dr></Dr>
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