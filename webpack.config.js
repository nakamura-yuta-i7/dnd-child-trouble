var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
	entry: {
		main: './src/main.js',
	},
	output: {
		path: __dirname + "/public",
		filename: "[name].js",
	},
	module: {
		loaders: [
			{ test: /\.jade$/, loader: "jade" },
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader?presets[]=es2015",
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
			}
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		new ExtractTextPlugin("[name].css"),
		// new webpack.ProvidePlugin({
		// 	$: "jquery",
		// 	jQuery: "jquery",
		// 	"window.jQuery": "jquery"
		// })
	],
	externals: {
		// require('data') is external and available
		//  on the global var data
		//'jquery': '$',
	}
};
