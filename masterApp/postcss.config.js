module.exports = {
    sourceMap: process.env.NODE_ENV === 'development',
    plugins: [
        require('autoprefixer')({
            "overrideBrowserslist": [
                ">0.25% in CN"
            ]
        })
    ]
}