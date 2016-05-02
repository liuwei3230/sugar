define([
	'sugar',
], function(sugar) {

	/**
	 * 基础启动页面
	 */
	var Boot = sugar.Component.extend({
		init: function(config) {
			this.Super('init', arguments);
		},

		// markdown 渲染完毕消息
		onMarkdownRendered: function() {
			var aside = this.getChild('aside');
			var footer = this.getChild('footer');
			var header = this.getChild('header');
			var loading = this.getChild('loading');

			aside && aside.show();
			footer && footer.show();
			header && header.show();
			loading && loading.hide();
		}
	});

	return Boot;
});