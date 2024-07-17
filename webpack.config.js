// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = MiniCssExtractPlugin.loader;



const config = {

    entry:{
        index:'./src/index.ts',
        jsfunctiion:'./src/routes.ts'
    },
    output: {
       

        path: path.resolve(__dirname, 'dist'),
    },
   
    devServer: {
        open: true,
        host: 'localhost',
        compress:true,
        historyApiFallback:true,
        port:3001
    },
    performance:{
        hints:false,
        maxEntrypointSize:512000,
        maxAssetSize:512000
    },
  


    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        new MiniCssExtractPlugin(),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '...'],
        fallback: {
            path: require.resolve('path-browserify'),
            crypto: require.resolve('crypto-browserify'),
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer'),
            os:require.resolve('os-browserify'),
            vm:require.resolve('vm-browserify')
            
          },
    },
};

module.exports = () => {
  
    if (isProduction) {
        config.mode = 'production';
        
        
        config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
        
    } else {
        config.mode = 'development';
    }
    return config;
};
