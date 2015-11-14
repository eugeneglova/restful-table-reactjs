var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: __dirname + "/public",
    entry: {
        scripts: "./js/src/app",
        styles: "../node_modules/bootstrap/dist/css/bootstrap.css"
    },
    output: {
        path: __dirname + "/public",
        filename: "js/[name].js",
        chunkFilename: "[id].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel",
                query: {
                    cacheDirectory: true,
                    presets: ["es2015", "react"]
                }
            },
            // Extract css files
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,  loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file?name=fonts/[name].[ext]&" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=image/svg+xml" }
        ]
    },
    // Use the plugin to specify the resulting filename (and add needed behavior to the compiler)
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
};
