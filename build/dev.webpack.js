const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:8].js',
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, '../public/'),
        publicPath: '/',
        host: '127.0.0.1',
        port: 3000,
        stats: 'errors-only',
        hot: true,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, '../src'),
            components: path.resolve(__dirname, '../src/components'),
            pages: path.resolve(__dirname, '../src/pages'),
            utils: path.resolve(__dirname, '../src/utils'),
            services: path.resolve(__dirname, '../src/services'),
            constants: path.resolve(__dirname, '../src/constants'),
            routes: path.resolve(__dirname, '../src/routes'),
            store: path.resolve(__dirname, '../src/store')
        },
    },
    module: {
        rules: [{
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|jpeg|svg|ico|json)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[hash:5].[ext]',
                        limit: 1024, // size <= 1kib
                        outputPath: 'img',
                    },
                }, ],
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            filename: 'index.html',
            inject: true,
        }),
    ],
};