# SimpleUI

# Installation
1. npm install
2. npm run dev (development model)
3. npm run build (production mode, automatically generated file hash)
4. npm run doc (write doc)


# test document site

[http://simpleui.webzeal.cn](http://simpleui.webzeal.cn)

# Examples

To Do ...

# Completed

1.Button 100%

2.Icon   80% (icon 数量补充下即可)

3.grid (100%)

4.input (100%)

5.List (coding)

6.tabbar 底部菜单 (coding)

7.plus input (coding)

8.banner(coding)

9.checkbox(coding)

# 开发说明

## 可以加QQ群：332339655 参与项目开发

1. /src目录用来编写组件源码

```html

src    这个文件夹
  --index.js
  --component
  --utils
  --styles

```

2. ／demo／src  用来 编写 测试代码（自己调试用的） 

    运行 npm run dev  会将 ／demo／src  打包进 ／demo／dist  

    运行 ／demo／dist／index.html 即可查看结果

```html

demo  这个文件夹
--src
--dist

src
-- ...

```

3. 因为 ／demo／src 已经自动加载了／src 的内容
    
   所以你编写好组件，在 ／demo／src 中 可以直接使用的  
   
   这些已经全部配置好了

```js

demo
--src
----app.js

import SimpleUI from "../../src/index.js";

SimpleUI.init({
    rem:2,
    ui:750
});

Vue.use(SimpleUI);

```


4. ／doc 是用来编写文档用的， 

    一般会由制定人来维护，可以不用管它

```html

doc  这个文件夹
--src
--dist

src
-- ...

```


5. npm run build 是 等到 准备发布版本的时候才会用的  

    会将 ／src 代码 打包进 ／dist  生成 simple-ui.js

```html

dist  这个文件夹
--simple-ui.js

src
-- ...

```

6. less 变量 放在 /styles/default.less 中  
    
    命名规范 @组件名_分类名_具体的名字  (全部大写) 
    
    如: @BUTTON_DEFAULT_COLOR 
    
    表示 button 组件  defalut 的 类型 的 color 变量

```less
@BUTTON_DANGER: #f04134;
@BUTTON_DANGER_HOVER: #f46e65;
```

7. less 函数 放在 /styles/function.less 中 命名规范 驼峰

    尽可能多的描述 函数的作用 如 .tranition()

```less
.transition(@default:all) {
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}
```

8. 每个组件在/components/新建一个文件夹,以组件名 命名 

  并且在 /components/index.js 中 import 这个 组件 并 export

```javascript
import Button from './button/button.vue';

export default {
    Button,
}
```
9. 请参考 ant-design 官方规范, 并做 移动端适配


10. 功能列表(初版)
![](http://i1.piimg.com/567571/63c63610403a6ef0.png)