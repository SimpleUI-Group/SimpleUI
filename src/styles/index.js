require("./reset.less");

const el = document.documentElement;

export default {
    init(r = 200, w = 750) {
        if (r == 0) return;
        r = r * 100;

        if(isNaN(r)) r = 200;

        let width = el.clientWidth;

        width = width > w ? w : width;

        el.style.fontSize = width / w * r + "px";

        document.body.style.maxWidth = w;

        window.onresize = this.init;
    }
};