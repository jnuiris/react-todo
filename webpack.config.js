const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//  创建插件实例
const HtmlPlugin = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html'
})

module.exports = {
    mode: 'development',
    entry: './index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        HtmlPlugin
    ]
}