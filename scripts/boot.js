require.config({
	'paths': {
		'sugar' : '../dist/sugar.min',
		'marked': '../lib/marked.min',
		'prism' : '../lib/prism'
	}
});

define([
	'sugar',
	'./intro',
	'./mvvm-api',
	'./sugar-api',
], function(sugar, IntroComp, MvvmApiComp, SugarApiComp) {
	var body = document.querySelector('body');

	var Main = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				'target'  : body,
				'template': 'template/index.tpl',
				'model'   : {
					'clickAside': this.clickAside
				}
			});
			this.Super('init', arguments);
		},

		viewReady: function() {
			// 介绍模块
			this.create('intro', IntroComp, {
				'target': this.query('.section-intro')
			});

			// Sugar API 模块
			this.create('sugar', SugarApiComp, {
				'target': this.query('.section-sugar')
			});

			// // MVVM API 模块
			// this.create('mvvm', MvvmApiComp, {
			// 	'target': this.query('.section-mvvm')
			// });
		},

		// 点击侧边栏
		clickAside: function(e) {
			var sel;
			var el = e.target;

			if (el.tagName !== 'LI') {
				return;
			}

			sel = this.$.getAttr(el, 'data-mod');

			console.log(sel);
		}
	});

	sugar.core.create('main', Main);
});