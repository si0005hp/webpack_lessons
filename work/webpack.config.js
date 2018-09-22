module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    devServer: {
        contentBase: './dist'
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 51200,
                            name: './images/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            },
        ]
    }
};