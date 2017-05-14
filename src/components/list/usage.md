# 下拉刷新与无限滚动列表组件

## 1. props

- infinite
    * description: 是否开启无限滚动功能
    * type: Boolean
    * default: false

- refresh
    * description: 是否开启下拉刷新功能
    * type: Boolean
    * default: false

- threshold
    * description: 无限滚动提前加载距离
    * type: String
    * default: ''

## 2. events

- load: 
自定义事件'load', 列表滚动到底部触发
<br />父组件在该事件的回调函数里向服务器请求数据
<br />next, stop, error 这三个函数作为事件回调函数的参数, 根据不同的请求状态手动调用
    * 如果请求成功并且还有数据 => next()
    * 如果请求失败 => error()
    * 如果请求成功, 但是没有更多数据了 => stop()

- refresh: 
自定义事件'refresh', 下拉距离超过50px并且手指释放后触发
<br />父组件在该事件的回调函数里向服务器请求数据
<br />next, error 这两个函数作为事件回调函数的参数, 根据不同的请求状态手动调用
    * 如果如果刷新成功 => next()
    * 如果请求失败 => error()

## 3. slot

    Ps: 除了items用户必须自定义，其它的都有默认内容，自定义是可选的 

- items: 自定义列表内容
- pull-hint: 自定义列表刚开始下拉时的提示内容，如：下拉刷新
- release-hint: 自定义列表下拉距离达到触发刷新条件，但手指还没释放时的提示内容，如：释放即可刷新
- refreshing: 自定义正在刷新时的提示内容，如：正在努力刷新…
- refresh-success: 自定义正在刷新成功后的提示内容，如：刷新成功！
- refresh-error: 自定义正在刷新失败后的提示内容，如：刷新失败！
- loading: 自定义列表滚动到底部时正在加载时的提示内容，如：正在加载…
- load-success: 自定义列表滚动到底部时加载成功后的提示内容，如：加载成功
- load-error: 自定义列表滚动到底部时加载失败后的提示内容，如：加载失败
- load-forbiddance: 自定义列表数据全部加载完后的提示内容，如：我是有底线的