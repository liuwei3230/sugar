define([
	'sugar'
], function(sugar) {

	/**
	 * Loading
	 */
	var Loading = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				'class': 'loading',
				'html' : [
					'<h3 class="loadBox">',
						'加载中',
						'<span class="time">······</span>',
					'</h3>'
				].join('')
			});
			this.Super('init', arguments);
		},

		hide: function() {
			this.el.style.display = 'none';
		}
	});

	return Loading;
});