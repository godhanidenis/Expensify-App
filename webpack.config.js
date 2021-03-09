const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProduction = env != undefined && env.production != undefined ? env.production : false;

    return {
        mode: 'development',
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        !isProduction ? 'style-loader' : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ],
                },
                {
                    test: /\.(png|jpg|gif)$/,
                    loader: 'url-loader'
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin()
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    };
};


