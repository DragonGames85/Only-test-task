const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        publicPath: '/',
    },
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'cheap-module-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.module\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1,
                            modules: {
                                namedExport: false,
                                localIdentName:
                                    process.env.NODE_ENV === 'production'
                                        ? '[hash:base64:6]'
                                        : '[name]__[local]--[hash:base64:4]',
                            },
                        },
                    },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            {
                test: /\.s?css$/,
                exclude: /\.module\.s?css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1, esModule: false } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                ],
            },
            { test: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/i, type: 'asset' },
        ],
    },
    devServer: {
        port: 5173,
        historyApiFallback: true,
        open: true,
        hot: true,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
            favicon: false,
        }),
    ],
    optimization: {
        splitChunks: { chunks: 'all' },
        runtimeChunk: 'single',
    },
};
