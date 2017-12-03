"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var webpack = require("webpack");
var path = require("path");
var fs = require("fs");
var angularEzternals = require("webpack-angular-externals");
var rxjsExternals = require("webpack-rxjs-externals");
var pkg = JSON.parse(fs.readFileSync('./package.json').toString());
exports.default = {
    entry: {
        'vendor': './src/ziggeo/vendors.ts',
        'index.umd': './src/ziggeo/index.ts',
        'index.umd.min': './src/ziggeo/index.ts'
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'angular2-ziggeo'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    externals: [angularEzternals(), rxjsExternals()],
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: 'tsconfig.json'
                        }
                    },
                    {
                        loader: 'angular2-template-loader'
                    }
                ],
                exclude: [
                    /node_modules/,
                    /\.(spec|e2e)\.ts$/
                ]
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'to-string-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000
                }
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, path.join(__dirname, 'src')),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            sourceMap: true
        }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: ['index.umd', 'index.umd.min', 'vendor']
        // }),
        new webpack.BannerPlugin({
            banner: ("\n/**\n* " + pkg.name + " - " + pkg.description + "\n* @version v" + pkg.version + "\n* @author " + pkg.author.name + "\n* @link " + pkg.homepage + "\n* @license " + pkg.license + "\n**/\n            ").trim(),
            raw: true,
            entryOnly: true
        })
    ]
};
