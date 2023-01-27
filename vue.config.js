const path = require('path');
module.exports = {
	devServer: {
		overlay: {
			warnings: false,
			errors: false,
		},
	},
	lintOnSave: false,
	productionSourceMap: false,
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
						   @import "@/styles/mixin.scss";
						   @import "@/styles/common.scss";
						   @import "@/styles/reset.scss";
					   `,
			},
		},
	},
	transpileDependencies: [
		({ onlyFirst = false } = {}) => {
			const pattern = [
				'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
				'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
			].join('|');
			return new RegExp(pattern, onlyFirst ? undefined : 'g');
		},
		'vuetify',
	],
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.join(__dirname, 'src/'),
			},
		},
		externals: {
			vue: 'Vue',
		},
	},
};
