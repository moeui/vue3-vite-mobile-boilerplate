module.exports = {
    plugins: [
        require('autoprefixer'),
        require('cssnano'),
        require('css-mqpacker'),
        require('postcss-pxtorem')({ remUnit: 37.5 })
    ]
}
