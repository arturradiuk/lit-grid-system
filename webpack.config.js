const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        path: path.resolve(__dirname, './demo/src/index.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
    },

    devServer: {
        port: 2022,
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './demo/index.html'
        }),
        new CleanWebpackPlugin()
    ],
}