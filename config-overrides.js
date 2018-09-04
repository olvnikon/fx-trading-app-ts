const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const flexFixes = require('postcss-flexbugs-fixes');

module.exports = {
  jest: config => ({
    ...config,
    transformIgnorePatterns: [
      '<rootDir>/node_modules/',
    ],
  }),
  webpack: (config, env) => {
    const loaders = config.module.rules.find(conf => !!conf.oneOf);
    const fileLoader = loaders.oneOf.find(loader => loader.loader && loader.loader.includes('file-loader'));
    fileLoader.exclude.push(/\.scss$/);

    const postCSSLoader = {
      loader: 'postcss-loader',
      options: {
        ident: 'postcss',
        plugins: () => [
          flexFixes,
          autoprefixer({ browsers: ['last 2 versions', 'ie >= 11'] }),
        ],
      },
    };

    const cssLoader = {
      loader: 'css-loader',
      options: {
        localIdentName: '[path][name]__[local]--[hash:base64:5]',
        modules: true,
      },
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: env === 'production'
        ? ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [cssLoader, postCSSLoader, 'sass-loader'],
        })
        : ['style-loader', cssLoader, postCSSLoader, 'sass-loader'],
    });
    return config;
  },
};
