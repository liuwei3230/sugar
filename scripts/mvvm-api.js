define([
	'./api'
], function(ApiBase) {

	var MvvmApi = ApiBase.extend({
		init: function(config) {
			config = this.cover(config, {
				'url': 'static/mvvm-api.md'
			});
			this.Super('init', arguments);
		}
	});

	return MvvmApi;
});