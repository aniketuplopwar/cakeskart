var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var CompressionPlugin = require('compression-webpack-plugin');
 
const path = require('path');
const rootDir = path.resolve(__dirname, '..');
 
module.exports = webpackMerge(commonConfig, {
 
devtool: 'source-map',
 
output: {
    path: path.resolve(rootDir, 'public/javascripts/dist'),
    publicPath: 'http://localhost:8080/',
    filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
 
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
        mangle: {
            keep_fnames: true
        }
        }),
        new ExtractTextPlugin('[name].css'),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        })

    ],
 
    devServer: {
        historyApiFallback: true,
        stats: 'minimal'
    }
});
