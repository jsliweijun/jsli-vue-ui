const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, ''), //当前目录
    // resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
    entry: {
        main: './site/main.js'
    },
    output: {
        library: 'vue2ui',
        libraryTarget: 'umd',
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [new VueLoaderPlugin()],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public')
        },
        compress: true,
        port: 9000
    }
};
