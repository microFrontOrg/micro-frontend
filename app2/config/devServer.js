/*
 * @Description: 开发服务器配置
 * @Author: 郭军伟
 * @Date: 2020-04-29 09:08:37
 * @LastEditTime: 2020-06-11 17:50:29
 */ 
const devServer = {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: false,
    overlay: true,
    port: 2002,
    quiet: true,
    stats: {
        warning: true,
        buildAt: true,
        errors: true,
        assets: true
    },
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
    proxy: {

    }
}

module.exports = devServer;