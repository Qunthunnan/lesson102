const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function loaders () {
    return [
          {
            test: /\.s[ac]ss$/i,
            use: [ 
            MiniCssExtractPlugin.loader, 
            "css-loader",
            "postcss-loader",
            "sass-loader", 
          ],
          },
          {
            test: /\.(html)$/,
            use: ['html-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'images/[name].[contenthash][ext]',
            }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator: {
              filename: 'fonts/[name].[contenthash][ext]',
            },
          },
    ]
}