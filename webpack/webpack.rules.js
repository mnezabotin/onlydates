const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { inDev } = require("./webpack.helpers");

module.exports = [
  {
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: "ts-loader",
      options: {
        transpileOnly: true,
      },
    },
  },
  {
    test: /\.css$/,
    use: [
      { loader: inDev() ? "style-loader" : MiniCssExtractPlugin.loader },
      { loader: "css-loader" },
    ],
  },
  {
    test: /\.scss$/i,
    use: [{
      loader: 'style-loader'
    }, {
      loader: 'css-loader'
    }, {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: function () {
            return [
              require('autoprefixer')
            ];
          }
        }
      }
    }, {
      loader: 'sass-loader'
    }]
  },
  {
    test: /\.svg$/,
    use: ["@svgr/webpack", "url-loader"],
  },
  {
    test: /\.(gif|jpe?g|tiff|png|ico|webp|bmp|eot|ttf|woff|woff2)$/i,
    type: "asset",
    generator: {
      filename: "assets/[hash][ext][query]",
    },
  },
];
