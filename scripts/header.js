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
		}
	});

	return Header;
});