define([
	'./api'
], function(ApiBase) {

	var SuagrApi = ApiBase.extend({
		init: function(config) {
			config = this.cover(config, {
				'url': 'static/sugar-api.md'
			});
			this.Super('init', arguments);
		}
	});

	return SuagrApi;
});