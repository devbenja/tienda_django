const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: {
            main: ['./assets/scss/main.scss', './assets/js/main.js']
        },
        output: {
            path: path.resolve(__dirname, 'static'),
            filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
            clean: true
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                api: 'modern-compiler',
                                sassOptions: {
                                    silenceDeprecations: ['legacy-js-api', 'import', 'color-functions']
                                }
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: isProduction ? 'css/[name].[contenthash].css' : 'css/[name].css'
            })
        ],
        devtool: false
    };
};
