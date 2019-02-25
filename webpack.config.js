const path = require('path');



module.exports = {
    entry: "./src/js/root/root.js",
    output: {
        filename: 'bootscript.main.js',
        path: path.resolve(__dirname, "dev/js"),
    },
    mode: 'development',
    devtool: 'source-map',
    watch: true,

    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            }
        ]
    }
}