const path = require('path')
const fs = require('fs')
const webpack = require('webpack')

let nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
	entry: {
		server: './src/server.js',
	},
	target: 'node',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, "build"),
		devtoolModuleFilenameTemplate: '[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate: '[absolute-resource-path]?[hash]'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: [
					{
            loader: 'babel-loader'
					}
				]
			}
		]
	},
	externals: nodeModules,
	plugins: [
		new webpack.BannerPlugin(
			{
				banner: 'require("source-map-support").install();',
				raw: true,
				entryOnly: false
			}
		)
	],
	devtool: 'source-map'
}