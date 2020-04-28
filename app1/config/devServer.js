const devServer = {
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: true,
    overlay: true,
    port: 1001,
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