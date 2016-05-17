require([
	'../../../src/mvvm/index'
], function(MVVM) {
	var layout, model, body = document.querySelector('body');


	layout =
	`
	<ul>
		<li v-for="item in items">
			<i>{{ $index }}</i>
			<span>{{ item.text }}</span>
		</li>
	</ul>
	<hr/>
	<ul>
		<li v-for="item in list">
			<i>{{ $index }}</i>
			<span>{{ item.text }}</span>
		</li>
	</ul>
	`;

	model =  {
		'items': [
			{'text': 'aaa'},
			{'text': 'bbb'},
			{'text': 'ccc'},
			{'text': 'ddd'},
		],

		'lists': [
			{'text': 'AAA'},
			{'text': 'BBB'},
			{'text': 'CCC'},
			{'text': 'DDD'},
		]
	}



	// start compile
	body.innerHTML = layout;
	var vm = new MVVM(body, model);
	// for global debug
	window.vm = vm.get();
});