var path = require("path");

var config = {
    mode: "development",

    entry: ["./src/app.tsx"],

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            }
        ]
    }
};

module.exports = config;