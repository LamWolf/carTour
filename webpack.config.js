const path = require('path');
const projectRoot = path.resolve(__dirname, '../');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const utils = require('./prebuild/utils');
const exitNodeModules = function(files) {
    if (!/\/local-/.test(files) && /\/node_modules\//.test(files)) {
        return files;
    }
    return '';
};
module.exports = {
    entry: {
        city: './app/web/static/city/index.js'
    },
    output: {
        filename: 'js/[name].js',
        chunkFilename: 'js/chunks/[name].js',
        path: path.resolve(__dirname, './app/public'),
        publicPath: 'http://127.0.0.1:7001/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // include: /node_modules\/webpack-dev-server/,
                exclude: exitNodeModules,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            'env', {
                                targets: {
                                    browsers: [ '>0%' ]
                                }
                            }
                        ]
                    ],
                    cacheDirectory: true
                }
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.html$/,
                loader: 'vue-html-loader'
            }, {
                test: /\.scss$/,
                // loader: ExtractTextPlugin.extract({"style", "css!postcss!sass"}),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {}
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                plugins() {
                                    return [
                                        require('precss'), require('autoprefixer')({ browsers: [ '> 0%' ] })
                                    ];
                                }
                            }
                        }, {
                            loader: 'sass-loader'
                        }
                    ]
                })
                // include: path.join(projectRoot, '../mainsrc'),
                // exclude: exitNodeModules
            }, {
                test: /\.html$/,
                loader: 'html-loader',
                include: path.join(projectRoot, '../mainsrc'),
                exclude: exitNodeModules
            }, {
                test: /\.css$/,
                // loader: ExtractTextPlugin.extract({fallbackLoader:"style", loader:"css!postcss!sass"}),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [ 'css-loader', 'postcss-loader' ]
                })
                // include: path.join(projectRoot, '../mainsrc'),
                // exclude: exitNodeModules
            }, {
                test: /\.tpl$/,
                loader: 'string-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg|mp3|mp4)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 2000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    },
    resolve: {
        alias: {
            widgets: path.resolve(__dirname, 'app/web/widgets')
        }
    },
    plugins: [ new ExtractTextPlugin({ filename: 'css/[name].css', allChunks: true }) ]
};
