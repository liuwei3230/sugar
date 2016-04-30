define([
	'sugar'
], function(sugar) {

	/**
	 * 通用页脚模块
	 */
	var Footer = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				'class'   : 'footNote',
				'template': 'template/footer.tpl'
			});
			this.Super('init', arguments);
		},

		// markdown 渲染完毕消息
		onMarkdownRendered: function() {
			var target = this.getConfig('target');
			target.style.display = 'block';
		}
	});

	return Footer;
});