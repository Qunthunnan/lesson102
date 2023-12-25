const HtmlWebpackPlugin = require('html-webpack-plugin'),
      MiniCssExtractPlugin = require('mini-css-extract-plugin'),
      ImageMinimizerPlugin = require('image-minimizer-webpack-plugin'),
      BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function plugins() {
    return  [
            new HtmlWebpackPlugin({
              title: 'Food',
              template: 'src/index.html',
              filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
              filename: "css/style[contenthash].css",
            }),
            new ImageMinimizerPlugin({
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  // Lossless optimization with custom option
                  // Feel free to experiment with options for better result for you
                  plugins: [
                    ["gifsicle", { interlaced: true }],
                    ["mozjpeg", { progressive: true, quality: 90 }],
                    ["optipng", { optimizationLevel: 5 }],
                    // Svgo configuration here https://github.com/svg/svgo#configuration
                    [
                      "svgo",
                      {
                        plugins: [
                          {
                            name: "preset-default",
                            params: {
                              overrides: {
                                removeViewBox: false,
                                addAttributesToSVGElement: {
                                  params: {
                                    attributes: [
                                      { xmlns: "http://www.w3.org/2000/svg" },
                                    ],
                                  },
                                },
                              },
                            },
                          },
                        ],
                      },
                    ],
                  ],
                },
              },
            }),
            new BundleAnalyzerPlugin(),
          ]
}