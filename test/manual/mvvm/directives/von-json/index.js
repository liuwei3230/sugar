require([
	'../../../../../bundle/mvvm'
], function(imports) {
	var MVVM = imports.default;
	var layout, model, body = document.querySelector('body');


	layout =
	`
	<h2 v-on="{'click.stop': vmClick(123, title, $event, 'abc'), 'mouseover': vmMosueover}">v-on json test with params ~</h2>
	`;

	model =  {
		'title': 'aaa',

		'vmClick': function() {
			console.log(arguments);
		},
		'vmMosueover': function() {
			console.log('mouseover');
		}
	}



	// start compile
	body.innerHTML = layout;
	var vm = new MVVM(body, model);
	// for global debug
	window.vm = vm.get();
});