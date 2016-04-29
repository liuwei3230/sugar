define([
	'./markdownRender'
], function(MarkdownRender) {

	var IntroMarkdown = MarkdownRender.extend({
		init: function(config) {
			config = this.cover(config, {
				'url': 'static/intro.md'
			});
			this.Super('init', arguments);
		}
	});

	return IntroMarkdown;
});