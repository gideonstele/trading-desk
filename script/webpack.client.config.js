const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isProd = process.env.NODE_ENV === 'production';
const cwd = process.cwd();

const extractBootstrapPlugin = new ExtractTextPlugin({
    filename: 'common-[chunkHash:7].css',
    allChunks: true,
});
const extractStylePlugin = new ExtractTextPlugin({
    filename: '[name]-[chunkHash:7].css',
    allChunks: true,
});

let query = {};
// if (process.env.NODE_ENV === 'production') {
query = {
    limit: 1000,
    name: 'static/res/[name].[hash:7].[ext]',
};
// }

const config = {
    performance: {
        maxEntrypointSize: 3000,
        hints: isProd ? 'warning' : false,
    },
    entry: {
        index: path.join(cwd, './app/src/index.js'),
        vendor: [ 'jquery' ],
    },
    output: {
        path: path.resolve(cwd, 'app/public'),
        publicPath: '/public/',
        filename: '[name].[chunkhash:7].js',
        chunkFilename: 'chunk-[name].[chunkhash:7].js',
    },
    resolve: {
        extensions: [ '.js', '.css', '.scss' ],
        modules: [
            'node_modules',
        ],
        alias: {
            '~src': path.resolve(cwd, '../src/'),
            '~modules': path.join(cwd, '/node_modules/'),
        },
    },
    resolveLoader: {
        modules: [
            path.join(cwd, '/node_modules'),
        ],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            }, {
                test: /\.json$/,
                loader: 'json-loader',
            },
            {
                test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: query,
            },
            {
                test: /\.css$/,
                include: /node_modules|externals/,
                use: extractBootstrapPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.css$/,
                exclude: /node_modules|externals/,
                use: extractStylePlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.(tpl.njk|njk)/,
                use: 'nunjucks-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
        new CleanWebpackPlugin([
            path.resolve(cwd, './app/public/*'),
            path.resolve(cwd, './app/view/**/*.nj'),
        ], {
            root: cwd,
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module, count ) {
                // any required modules inside node_modules are extracted to vendor
                return (
                    module.resource &&
                    /\.js$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(cwd, 'node_modules')
                    ) === 0
                );
            },
        }),
        extractBootstrapPlugin,
        extractStylePlugin,
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(cwd, 'app/src/view/home.serve.nj'),
            filename: '../view/home.nj',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(cwd, 'app/src/view/layout/default.serve.nj'),
            filename: '../view/layout/default.nj',
            inject: false,
        }),
    ],
};
!isProd && config.plugins.push(new FriendlyErrorsPlugin());
module.exports = config;
