require([
	'../../../../bundle/sugar'
], function(imports) {
	var sugar = imports.default;

	var MainPage = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				'template': 'tpl.html'
			});
			this.Super('init', arguments);
		},

		viewReady: function() {
			var span = this.query('span');

			this.bind(span, 'click', function(e) {
				console.log(e);
			});
		}
	});


	sugar.core.create('mainPage', MainPage, {
		'target': document.querySelector('body')
	});
});