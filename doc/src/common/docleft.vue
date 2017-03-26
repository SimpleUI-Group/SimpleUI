<template>
    <div class="docbox-left">
        <pre><code :class="type"><slot></slot></code></pre>
    </div>
</div>
</template>
<script>
    export default {
        name:"Dl",
        props:["type"],
        mounted() {
            document.querySelectorAll('pre code').forEach((v,i,a)=>{
                window.hljs.highlightBlock(v);
            })
        }
    }
</script>