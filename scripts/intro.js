define([
	'./api'
], function(ApiBase) {

	var Intro = ApiBase.extend({
		init: function(config) {
			config = this.cover(config, {
				'url': 'static/intro.md'
			});
			this.Super('init', arguments);
		}
	});

	return Intro;
});