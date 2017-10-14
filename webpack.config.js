const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.js',
        about: './src/js/about.js'
    },
    output: {
        // name is a filler. It will create app.bundle.js and about.bundle.js
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // show source map in the files
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //use: ['css-loader', 'postcss-loader', 'sass-loader']
                    use: [
                        // user source map for scss as well
                        {loader: 'css-loader', options: {sourceMap: true}},
                        {loader: 'postcss-loader', options: {sourceMap: true}},
                        {loader: 'sass-loader', options: {sourceMap: true}}
                    ]
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // rename all the css file to style.css
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/views/index.html',
            chunks: ['app'] // corresponding to the app entry point (match with the index.js)
        }),
        new HtmlWebpackPlugin({
            filename: 'about.html',
            template: 'src/views/about.html',
            chunks: ['about'] // corresponding to the about entry point (match with the about.js)
        }),
        new BrowserSyncPlugin(
            // BrowserSync options
            {
                // browse to http://localhost:3000/ during development
                host: 'localhost',
                port: 3000,
                // proxy the Webpack Dev Server endpoint
                // (which should be serving on http://localhost:3100/)
                // through BrowserSync
                proxy: 'http://localhost:8080/'
            },
            // plugin options
            {
                // prevent BrowserSync from reloading the page
                // and let Webpack Dev Server take care of this
                reload: false
            }
        )
    ]
};
