<template>
<div class="box-contianer">
    <h1>Icon</h1>
    <p>我们内置了很多图标可以直接使用</p>
    <Docbox url="../../demo/dist/index.html#/component/icon-1">
        <Dl type="html">&lt;Icon type="check"&gt;&lt;/Icon&gt;
&lt;Icon type="loading"&gt;&lt;/Icon&gt;            
&lt;Icon type="search"&gt;&lt;/Icon&gt;</Dl>
        <Dr>
            使用<code>type</code>属性指定图标名称，具体对照见本页最下方
            <code>loading</code>图标将自动旋转
        </Dr>
    </Docbox>

    <p>可以使用<code>size</code>属性来调整大小</p>
    <Docbox url="../../demo/dist/index.html#/component/icon-2">
        <Dl type="html">&lt;Icon type="check" size="12"&gt;&lt;/Icon&gt;
&lt;Icon type="check" size="14"&gt;&lt;/Icon&gt;            
&lt;Icon type="check" size="16"&gt;&lt;/Icon&gt;
&lt;Icon type="check" size="18"&gt;&lt;/Icon&gt;
&lt;Icon type="check" size="20"&gt;&lt;/Icon&gt;
&lt;Icon type="check" size="22"&gt;&lt;/Icon&gt;
&lt;Icon type="check" size="24"&gt;&lt;/Icon&gt;
&lt;Icon type="check" size="26"&gt;&lt;/Icon&gt;</Dl>
        <Dr>
            实际上 <code>size</code>对应的就是字体大小属性<code>font-size</code>
        </Dr>
    </Docbox>

    <p>可以使用<code>color</code>属性来指定颜色</p>
    <Docbox url="../../demo/dist/index.html#/component/icon-3">
        <Dl type="html">&lt;Icon type="search" size="22" color="#f00"&gt;&lt;/Icon&gt;
&lt;Icon type="search" size="22" color="#f0f"&gt;&lt;/Icon&gt;            
&lt;Icon type="search" size="22" color="#00f"&gt;&lt;/Icon&gt;
&lt;Icon type="search" size="22" color="#0f0"&gt;&lt;/Icon&gt;
&lt;Icon type="search" size="22" color="#0ff"&gt;&lt;/Icon&gt;</Dl>
        <Dr>
            <code>color</code>支持十六进制，rgb，rgba 和 英文名
        </Dr>
    </Docbox>

    <h2>内置图标列表</h2>
    <p>to do</p>
</div>

</template>
<script>
export default {
    name:'icon'
}
</script>
<style>
</style>