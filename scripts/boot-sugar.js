require.config({
	'paths': {
		'sugar' : '../dist/sugar.min'
	}
});

define([
	'sugar',
	'./header',
	'./aside',
	'./md-sugar',
	'./footer',
], function(sugar, Header, Aside, SugarMarkdown, Footer) {

	var Main = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				'target'  : document.querySelector('body')
			});
			this.Super('init', arguments);
		},

		viewReady: function() {
			// 头部
			this.create('header', Header, {
				'target': document.querySelector('header')
			});

			// 侧边栏
			this.create('aside', Aside, {
				'target': document.querySelector('aside')
			});

			// Sugar markdown 模块
			this.create('markdown', SugarMarkdown, {
				'target': document.querySelector('article')
			});

			// 页脚
			this.create('footer', Footer, {
				'target': document.querySelector('footer')
			});
		}
	});

	sugar.core.create('main', Main);
});