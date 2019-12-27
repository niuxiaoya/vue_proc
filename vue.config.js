const path = require( "path" );

const resolve = dir => {
    return path.join( __dirname, dir );
};

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";

module.exports = {
    // Project deployment base
    // By default we assume your app will be deployed at the root of a domain,
    // e.g. https://www.my-app.com/
    // If your app is deployed at a sub-path, you will need to specify that
    // sub-path here. For example, if your app is deployed at
    // https://www.foobar.com/my-app/
    // then change this to '/my-app/'
    // baseUrl: BASE_URL,
    publicPath: BASE_URL,
    // tweak internal webpack configuration.
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set( "@", resolve( "src" ) ) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set( "_c", resolve( "src/components" ) );
    },
    // 设为false打包时不生成.map文件
    productionSourceMap: false,
    // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
    // devServer: {
    //   proxy: 'http://192.168.0.2:83/mdpapp'
    // }
    devServer: {
        proxy: {
            "/guoluqiang": {
                target: "http://192.168.0.135:8880",
                changeOrigin: true,
                pathRewrite: {
                    "^/guoluqiang": "/"
                }
            },
            "/weiyu": {
                target: "http://192.168.0.2:83",
                changeOrigin: true,
                pathRewrite: {
                    "^/weiyu": "/"
                }
            },
            "/zhouzanzan": {
                target: "http://192.168.0.118:8880",
                changeOrigin: true,
                pathRewrite: {
                    "^/zhouzanzan": "/"
                }
            },
            "/mdpapp": {
                target: "http://192.168.0.4:83/mdpapp",
                changeOrigin: true,
                pathRewrite: {
                    "^/mdpapp": "/"
                }
            },
            "/json": {
                target: "http://192.168.0.4:83/",
                changeOrigin: true,
                pathRewrite: {
                    "^/json": "/"
                }
            },
            "/mymdps": {
                target: "http://192.168.0.4:83/mymdps",
                changeOrigin: true,
                pathRewrite: {
                    "^/mymdps": "/"
                }
            },
            "/mymdp": {
                target: "http://192.168.0.4:83/mymdp",
                changeOrigin: true,
                pathRewrite: {
                    "^/mymdp": "/"
                }
            },
            "/mdp": {
                target: "http://192.168.0.4:83/mdp",
                changeOrigin: true,
                pathRewrite: {
                    "^/mdp": "/"
                }
            },
            "/jfinal_sql": {
                target: "http://192.168.0.4:83/jfinal_sql",
                changeOrigin: true,
                pathRewrite: {
                    "^/jfinal_sql": "/"
                }
            },
            "/newmdpsingle": {
                target: "http://39.98.116.81:8080",
                changeOrigin: true,
                pathRewrite: {
                    "^/newmdpsingle": "/"
                }
            },
            "/newmdpa": {
                target: "http://47.92.242.64:8080",
                changeOrigin: true,
                pathRewrite: {
                    "^/newmdpa": "/"
                }
            },
            "/newmdpb": {
                target: "http://39.98.116.81:8080",
                changeOrigin: true,
                pathRewrite: {
                    "^/newmdpb": "/"
                }
            },
            "/newmdpc": {
                target: "http://39.99.170.209:8080",
                changeOrigin: true,
                pathRewrite: {
                    "^/newmdpc": "/"
                }
            },
            "/newmdpd": {
                target: "http://39.98.136.4:8080",
                changeOrigin: true,
                pathRewrite: {
                    "^/newmdpd": "/"
                }
            },
            "/newmdpe": {
                target: "http://39.98.43.25:8080",
                changeOrigin: true,
                pathRewrite: {
                    "^/newmdpe": "/"
                }
            }
        }
    },
    css: {
        // css 地图导航
        sourceMap: true
    }
};