/*
 * @Description: 开发服务器配置
 * @Author: 郭军伟
 * @Date: 2020-04-29 09:08:37
 * @LastEditTime: 2020-05-18 14:14:53
 */ 
const devServer = {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: false,
    overlay: true,
    port: 1002,
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