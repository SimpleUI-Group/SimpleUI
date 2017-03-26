<template>
<div class="box-contianer">
    <h1>起步</h1>
    <h2>下载</h2>
    <p>github 地址：<a href="https://github.com/SimpleUI-Group/SimpleUI">https://github.com/SimpleUI-Group/SimpleUI</a></p>
    <h2>打包</h2>
    <pre><code class="shell">npm run build</code></pre>
    <h2>使用</h2>
    <pre class="javascript"><code>//引入vue
import Vue from "vue";
//引入 SimpleUI
import SimpleUI form 'SimpleUI';
//vue 挂载 SimpleUI
Vue.use(SimpleUI);</code></pre>
    <p>我们预设了在375px逻辑像素下<code>1rem = 100px</code>你也可以手动设置</p>
    <pre><code class="javascript">SimpleUI.init({
    rem:2, //1 为 1rem:50px 相当于在750 的ui稿上是1:1 的关系   2 为 1rem:100px 1:2的关系  默认 2
    ui:750 //ui 稿宽度， 默认 750
});</code></pre>
</div>

</template>
<script>
export default {
    name:'index',
    mounted() {
        document.querySelectorAll('pre code').forEach((v,i,a)=>{
            window.hljs.highlightBlock(v);
        })
    }
}
</script>
<style>
</style>