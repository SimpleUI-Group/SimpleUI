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

4.input (coding)

5.List (coding)

6.tabbar 底部菜单 (coding)


# 开发说明

## 可以加QQ：583843162 参与项目开发

1. less 变量 放在 /styles/default.less 中  命名规范 @组件名_分类名_具体的名字  (全部大写) 如: @BUTTON_DEFAULT_COLOR 表示 button 组件  defalut 的 类型 的 color 变
量

```less
@BUTTON_DANGER: #f04134;
@BUTTON_DANGER_HOVER: #f46e65;
```

2. less 函数 放在 /styles/function.less 中 命名规范 驼峰, 尽可能多的描述 函数的作用 如 .tranition()

```less
.transition(@default:all) {
    -webkit-transition: all .3s cubic-bezier(.645,.045,.355,1);
    transition: all .3s cubic-bezier(.645,.045,.355,1);
}
```
3.每个组件在/components/新建一个文件夹,以组件名 命名 并且在 /components/index.js 中 import 这个 组件 并 export
```javascript
import Button from './button/button.vue';

export default {
    Button,
}
```
4.请参考 ant-design 官方规范, 并做 移动端适配

5.demo 文件价 目前阶段用于调试,所以自行配置路由并建立对应的组件 写代码调试,index 目前已被使用 自行创建组件

6.功能列表(初版)
![](http://i1.piimg.com/567571/8ec425d0b607dc72.png)