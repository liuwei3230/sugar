define([
	'sugar',
	'marked',
	'prism'
], function(sugar, marked, prism) {

	var ApiBase = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				// markdown 拉取地址
				'url': ''
			});
			this.Super('init', arguments);
		},

		// 视图初始化完毕
		viewReady: function() {
			// 拉取 markdown 进行渲染
			sugar.ajax.load(this.getConfig('url'), this.afterLoad, this);
		},

		// 数据加载回调
		afterLoad: function(err, data) {
			if (err) {
				sugar.util.error(err);
				return;
			}

			// 转成 markdown 格式
			this.el.innerHTML = marked(data.result);

			// 高亮代码
			prism.highlightAll();
		}
	});

	return ApiBase;
});