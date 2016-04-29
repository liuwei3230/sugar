require.config({
	'paths': {
		'sugar' : '../dist/sugar.min'
	}
});

define([
	'sugar',
	'./header',
	'./aside',
	'./intro'
], function(sugar, Header, Aside, IntroMarkdown) {

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

			// 介绍 markdown 模块
			this.create('markdown', IntroMarkdown, {
				'target': document.querySelector('article')
			});
		}
	});

	sugar.core.create('main', Main);
});