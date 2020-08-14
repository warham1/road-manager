module.exports = {
	pluginOptions: {},
	transpileDependencies: ["vuetify"],
	configureWebpack: {
		devServer: {
			historyApiFallback: true,
		},
	},
};
