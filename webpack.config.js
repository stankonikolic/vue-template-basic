const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devServer: {
        contentBase: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(js|vue)?$/,
                use: {
                    loader: "eslint-loader"
                },
                exclude: [/node_modules/, /lib/]
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader"
                }
            },
            {
                test: /\.js?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                },
                exclude: [/node_modules/, /lib/]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    devtool: "source-map",
    mode: "development",
};