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
    proxy: {
        '/app1': {
            target: 'http://localhost:1001'
        },
        '/app2': {
            target: 'http://localhost:1002'
        }
    }
}

module.exports = devServer;