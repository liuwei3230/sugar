define([
	'sugar'
], function(sugar) {

	/**
	 * 通用侧边栏导航模块
	 */
	var Aside = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				'tag': 'ul',
				'template': 'template/aside.tpl',
				'model'   : {
					'items': [
						{'text': '框架介绍', 'href': '/'},
						{'text': 'Sugar API', 'href': 'sugar.html'},
						{'text': 'MVVM API', 'href': 'mvvm.html'},
						{'text': 'Github repo', 'href': 'https://github.com/tangbc/sugar'}
					]
				}
			});
			this.Super('init', arguments);
		},

		// markdown 渲染完毕
		onMarkdownRendered: function() {
			console.log('markdownRendered');
		}
	});

	return Aside;
});