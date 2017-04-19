var path = require('path'); //根路径
var webpack = require('webpack'); //webpack模块
var HtmlWebpackPlugin = require('html-webpack-plugin'); //webpack html 打包模块

var node_modules = path.resolve(__dirname, '../node_modules'); //node包模块
var basepath = __dirname + '/../src/'; //源码路径

var config = {
    entry:{
        "index" : [basepath+'index.js'], //入口文件
    },
    output: {
        path: path.join(__dirname,'/../dist/'), //构建目录
        filename: 'simple-ui.js' //文件名规则 [name]表示 和 入口一致
    },
    module: {
        loaders: [
            {  //对大于6000字节 的图片采取base64处理
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=6000'
            },{
                test: /\.css$/,  //css 加载器
                loader: 'style-loader!css-loader'
            },{
                enforce: "pre",
                test: /\.js$/, //js 加载器
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },{
                test: /\.js$/, //js 加载器
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015'] //转换 es6编码为 es5
                }
            }, {
                test: /\.vue$/,  //vue 模板加载器
                loader: 'vue-loader',
            },
            { test: /\.less$/, loaders: [ 'style', 'css', 'less' ] }
        ],
    },
    vue:{
        postcss:[require('autoprefixer')({
            browsers:[
                "last 3 versions","iOS 8","not ie <= 9",
                "Android >= 4.4",
                "last 3 and_chr versions",
                "last 3 and_ff versions",
                "last 3 op_mob versions",
                "last 3 op_mob versions",
                "last 3 op_mini versions"
            ],
            //是否美化属性值
            cascade:true,
            //是否去掉不必要的前缀
            remove:true
        })]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {},
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
       }),
        //提供全局的变量，在模块中使用无需用require引入
        new webpack.ProvidePlugin({
            util:__dirname + '/../src/utils/util.js'
         }),

        //去掉各种调试信息
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_debugger: true,
                drop_console: true
            }
        }),
    ],
    debug: false,
};

module.exports = config;

