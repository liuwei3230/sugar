define([
	'./markdownRender'
], function(MarkdownRender) {

	var MvvmMarkdown = MarkdownRender.extend({
		init: function(config) {
			config = this.cover(config, {
				'url': 'static/mvvm-api.md'
			});
			this.Super('init', arguments);
		}
	});

	return MvvmMarkdown;
});