const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = (_env, _options) => ({
	stats: 'minimal',
	mode: isDevelopment ? 'development' : 'production',
	optimization: {
		minimizer: [
			!isDevelopment && new TerserPlugin(),
			!isDevelopment && new OptimizeCSSAssetsPlugin({}),
		].filter(Boolean),
	},
	entry: {
		app: './src/index.tsx',
	},
	devServer: {
		contentBase: './dist',
	},
	output: {
		filename: 'js/[name].js',
		chunkFilename: 'js/[name].chunk.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				exclude: [/node_modules/],
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							modules: {
								localIdentName: isDevelopment ? '[path][name]__[local]' : '[hash:base64]',
							},
						},
					},
				],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({filename: 'css/[name].css', chunkFilename: 'css/[name].chunk.css', ignoreOrder: true}),
		new HtmlWebpackPlugin({
			title: 'Sane Defauls',
			filename: 'index.html',
			template: './src/index.html'
		})
	],
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
	},
});
