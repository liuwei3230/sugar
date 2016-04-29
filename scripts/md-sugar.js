define([
	'./markdownRender'
], function(MarkdownRender) {

	var SuagrMarkdown = MarkdownRender.extend({
		init: function(config) {
			config = this.cover(config, {
				'url': 'static/sugar-api.md'
			});
			this.Super('init', arguments);
		}
	});

	return SuagrMarkdown;
});