const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({ 
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: __dirname + '/app/index.js',
	// module: {
		// loaders: [
		// 	{
		// 		test: /\.(js|jsx)$/,
		// 		exclude: /node_modules/,
		// 		loader: ['babel-loader']		
		// 	}, 
			
		// ],
	
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: 'babel-loader',
				},
				{
					test: /\.css$/,
					use: [{
						loader: 'style-loader',
					}, {
						loader: 'css-loader',
					}, 
				],
				},
				{
					test: /\.(png|jpg|jpeg|gif|svg)$/,
					use: [
						{
							loader: 'file-loader'
						}
					]
				},
			]
		},
	output: {
		filename: 'bundle.js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebpackPluginConfig],
	resolve: {
		extensions: ['.js', '.jsx']
	}
};