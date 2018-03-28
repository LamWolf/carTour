const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StringReplacePlugin = require('string-replace-webpack-plugin');

exports.assetsPath = function(_path) {
    return path.posix.join(config.build.assetsSubDirectory, _path);
};

exports.StringReplacePlugin = function() {
    return StringReplacePlugin;
};

exports.cssLoaders = function(options) {
    options = options || {};
    // generate loader string to be used with extract text plugin
    function generateLoaders(loaders) {
        const sourceLoader = loaders.map(function(loader) {
            let extraParamChar;
            if (/\?/.test(loader)) {
                loader = loader.replace(/\?/, '-loader?');
                extraParamChar = '&';
            } else {
                loader = loader + '-loader';
                extraParamChar = '?';
            }
            return loader + (options.sourceMap ? extraParamChar + 'sourceMap' : '');
        }).join('!');

        if (options.extract) {
            // return ExtractTextPlugin.extract('vue-style-loader', sourceLoader)
            // ExtractTextPlugin.extract({fallbackLoader:"style", loader:"css!postcss"}),
            return ExtractTextPlugin.extract({ fallback: 'vue-style-loader', loader: sourceLoader });
        }
        return [ 'vue-style-loader', sourceLoader ].join('!');
        // return {
        //   fallback : 'vue-style-loader',
        //   use : [sourceLoader].join('!')
        // }

    }

    // http://vuejs.github.io/vue-loader/configurations/extract-css.html


    return {
        css: generateLoaders([ 'css' ]),
        postcss: generateLoaders([ 'css' ]),
        less: generateLoaders([ 'css', 'less' ]),
        sass: generateLoaders([ 'css', 'sass-loader?indentedSyntax' ]),
        scss: generateLoaders([ 'css', 'postcss-loader!sass' ]),
        stylus: generateLoaders([ 'css', 'stylus' ]),
        styl: generateLoaders([ 'css', 'stylus' ])
    };
};

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
    const output = [];
    const loaders = exports.cssLoaders(options);
    for (const extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            loader
        });
    }
    console.log(output);
    return output;
};
