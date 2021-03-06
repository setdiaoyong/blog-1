/*
  webpack 打包的基础配置
*/
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

const resolve = (...dir) => path.resolve(__dirname, ...dir)

module.exports = {
    entry: {
        main: './src/main.jsx',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: { buffer: false },
        alias: {
            '@': resolve('../src'),
        },
    },
    output: {
        path: resolve('../docs'),
        filename: '[name].build.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'assets/img/[name].[hash:7].[ext]',
                    },
                },
            },
            {
                test: /\.(eot|ttf|woff)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'assets/fonts/[name].[hash:7].[ext]',
                    },
                },
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: 'assets/media/[name].[hash:7].[ext]',
                    },
                },
            },
            {
                test: /\.(md)$/,
                use: 'raw-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve('../', 'index.html'),
            filename: 'index.html',
            favicon: './src/assets/favicon.ico' || false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
    ],
}
