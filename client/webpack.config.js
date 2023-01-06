const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_env, argv) =>{

    return {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName:  "production"
                        }
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader", "css-loader"
                    ]
                },
                {
                    test: /\.svg$/,
                    use: ["@svgr/webpack"]
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "templates/index.html"),
                inject: true
            })
        ],
        devServer: {hot: true, open: true, port: 11111,
            client: {
                overlay: false
            }
        },
        entry: {app: "./src/index.js"},
        output: {
            path: path.resolve(__dirname, "dev-build"),
            filename: "bundle.js"
        }
    }
}