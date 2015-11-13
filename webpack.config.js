module.exports = {
    context: __dirname + "/public/js/src",
    entry: "./app",
    output: {
        path: __dirname + "/public/js",
        filename: "scripts.js"
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
            }
        ]
    }
};
