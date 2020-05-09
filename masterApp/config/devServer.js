/*
 * @Description: 
 * @Author: 郭军伟
 * @Date: 2020-04-29 09:08:37
 * @lastEditTime: Do not edit
 */
const devServer = {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: true,
    overlay: true,
    port: 1000,
    quiet: true,
    stats: {
        warning: true,
        buildAt: true,
        errors: true,
        assets: true
    },
}

module.exports = devServer;