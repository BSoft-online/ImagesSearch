const HtmlWebPackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader',
            },
        ],
    },
    resolve: {
        alias: {
            features: path.resolve(__dirname, 'src/features'),
            config: path.resolve(__dirname, 'src/config'),
        },
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new Dotenv(),
        new CleanWebpackPlugin(),
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html',
        }),
        new webpack.DefinePlugin({
            'process.env.API_URL': process.env.API_URL,
        }),
    ],
};
