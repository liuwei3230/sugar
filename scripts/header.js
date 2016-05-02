define([
	'sugar'
], function(sugar) {

	/**
	 * 通用头部模块
	 */
	var Header = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				'class'   : 'header',
				'template': 'template/header.tpl'
			});
			this.Super('init', arguments);
		},

		show: function() {
			var target = this.getConfig('target');
			target.style.display = 'block';
		}
	});

	return Header;
});