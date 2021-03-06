## sugar

[![Travis CI Status](https://travis-ci.org/tangbc/sugar.svg?branch=master)](https://travis-ci.org/tangbc/sugar)
[![codecov](https://codecov.io/gh/tangbc/sugar/branch/master/graph/badge.svg)](https://codecov.io/gh/tangbc/sugar)


A lightweight and powerfull MVVM library for building web UI component. Simple API and without any dependence.
Consists of two independent parts: **`sugar`** ( *support component system* ) and **`mvvm`** ( *support data binding & view refresh* )


## Diagram

<img src="http://7xodrz.com1.z0.glb.clouddn.com/sugar-constructor-en" width="600">


## Directory

* `test/` Unit test files and API test demos.

* `build/` Development and production config files.

* `demos/` Several complete demos developed by sugar.js.

* `dist/` Bundle files of sugar.js and mvvm.js, and their compressed files.

* `src/` Source code files:

	* `src/main/` Component system modules, all the module files in this directory are serving for component.js. Components can be included each other, nested and have message communication. [See more API here](http://tangbc.github.io/sugar/sugar.html)

	* **`src/mvvm/`** A simple MVVM library, directive support bind text, two-way data binding, bind attribute, bind event, repeat list and more. **mvvm doesn't rely on sugar, it can be used independently**. [See more API here](http://tangbc.github.io/sugar/mvvm.html)


## Hello world
```javascript
// define HelloWorld component:
var HelloWorld = sugar.Component.extend({
	init: function(config) {
		this.cover(config, {
			'class': 'demo',
			'html': '<h1>{{ title }}</h1>',
			'model': {
				'title': 'Hello world!'
			}
		});
		this.Super('init', arguments);
	}
});

// create to body:
sugar.core.create('hello-world', HelloWord, {
	'target': document.body
});
```
And then the HTML structure will be:
```html
...
<body>
	<div class="demo">
		<h1>Hello world!</h1>
	</div>
</body>
...
```


## Demos

There are several demos in **`demos/`** directory, check it out and preview them in the following links:

* [Star rating](http://tangbc.github.io/sugar/demos/star)
* [Simple datePicker](http://tangbc.github.io/sugar/demos/date)
* [tangbc.github.io/sugar](http://tangbc.github.io/sugar)
* [Simple TodoMVC](http://tangbc.github.io/sugar/demos/todoMVC)

You can experience or preview `sugar.js` by a *RadioComponent* in [jsfiddle](https://jsfiddle.net/tangbc/may7jzb4/6/).


## Usage

* Both `sugar.js` and `mvvm.js` can be used by `CMD`, `AMD` and `<script></script>` tag.
	* `sugar (about 38 kb)` http://tangbc.github.io/sugar/dist/sugar.min.js
	* `mvvm (about 30 kb)` http://tangbc.github.io/sugar/dist/mvvm.min.js

* Browser support: does not support IE8 and below, used `Object.defineProperty`, `Object.create` ...


## ChangeLog

* [See releases](https://github.com/tangbc/sugar/releases)


## Contribution

1. Clone to local **`git clone https://github.com/tangbc/sugar.git`**

2. Install nodejs packages：**`npm install`**

3. Dev and debug for sugar ：**`npm run dev-sugar`**

4. Dev and debug for mvvm ：**`npm run dev-mvvm`**

5. Running uint test：**`npm run test`**

6. Generate the test coverage report：**`npm run cover`**

7. Bundle and compress source code：**`npm run pack`**
