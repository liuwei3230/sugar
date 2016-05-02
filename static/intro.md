# 1. sugar.js 特点

* 体积轻量 Api 简单。

* 模块化/组件化前端工程。

* 视图组件可复用、可继承，方便开发和维护。

* 组件系统支持消息通信、组件嵌套、MVVM 和模板布局。


# 2. 用 sugar.js 构建视图组件

定义一个视图组件只要基于 `sugar.Component` 继承出来就可以了，以下构建一个简单的组件示例：

```javascript
var sugar = require('dist/sugar.min');

var MyComponent = sugar.Component.extend({
	init: function(config) {
		config = this.cover(config, {
			// 组件最外层的元素标签名称
			'tag'     : 'div',
			// 组件的 html 布局模板文件，可以在模板中使用 mvvm 指令
			'template': 'path/to/mycomponent.html',
			// mvvm 数据模型定义（如果用到）
			'model'   : {}
		});
		this.Super('init', arguments);
	},
	viewReady: function() {
		// 组件的视图渲染完毕后会立即调用 viewReady 方法
		// 通常在这里开始组件的业务逻辑
		this.doMyBusiness();
	},
	doMyBusiness: function() {
		// doSomething
	},
	sayHello: function() {
		alert('hello sugar ~');
	}
});
```

通过以上的定义， `MyComponent` 变成了一个视图展现为 `mycomponent.html` 的布局，且可以处理指定业务逻辑的通用组件（在 sugar 中，任何组件都是通用的~），此时的 `MyComponent` 只是一个组件的定义，并没有添加到页面文档中。要添加到文档中则需要利用 `sugar.core` 生成一个 `MyComponent` 的实例（Instance）并指定添加到的文档位置（target 参数）：

```javascript
var compInstance = sugar.core.create('my-component', MyComponent, {
	'target': document.querySelector('body')
});

compInstance.sayHello();
```

`compInstance` 并非只有显式定义的 `sayHello` 和 `doMyBusiness` 这个两个方法，还有其他从原型链上（sugar.Component）继承而来的方法，比如（了解全部请参考[suagr api](sugar.html)）：

```javascript
compInstance.getConfig('target'); // 返回 <body></body> 元素

compInstance.destroy(); // 销毁这个组件实例（销毁视图并从文档移除）
```

上面说的 **“在 sugar 中任何组件都是通用的”** 是因为一个组件可以生成任意多个相同的且互不影响的实例：

```javascript
var compInstance1 = sugar.core.create('my-component-1', MyComponent, {
	'target': document.querySelector('body')
});

var compInstance2 = sugar.core.create('my-component-2', MyComponent, {
	'target': document.querySelector('body')
});

var compInstance3 = sugar.core.create('my-component-3', MyComponent, {
	'target': document.querySelector('body')
});
```

这种方式对组件的维护是很方便的，例如多个页面或者业务模块需要用到一个相同功能组件，那么只要开发定义这一个组件，使用的地方只要将这个组件 create 出一个实例就好了。

还有一种场景，假如组件 `MyComponent` 解决了功能需求 A，但是又来了个需求：需要一个组件在 A 的需求基础上还要去实现 B 功能，简称 AB 功能组件，这时可以很方便的利用组件的继承来实现：

```javascript
var ABComponent = MyComponent.extend({
	// 在这里可以选择性的新增属性或方法去完成 B 功能需求
	// 同时 MyComponent 最初定义的方法仍然存在，除非在这里被重写
	// 不管新增或者被重写与否，原来的 MyComponent 不受任何影响
});

// 假如需要，可以无限继承下去：
var ABCComponent = ABComponent.extend({/**/});

var ABCDComponent = ABCComponent.extend({/**/});

var ABCDEComponent = ABCDComponent.extend({/**/});
```

综上所述，`sugar` 构建组件有三大特点：**模块化**、**可复用性** 和 **可继承性**。


# 3. sugar.js 组成和实现

sugar.js 由两个完全独立的部分组成：

1. **`sugar/main`** 实现组件系统的底层架构，包括组件的继承机制，视图的定义、初始化、渲染，组件间的消息通信、Ajax 异步请求等基础功能。

2. **`sugar/mvvm`** 一个利用数据绑定 + 视图刷新实现的 MVVM 库，指令的名称和用法与尤大的 `Vue.js` 相似，但实现的细节和依赖监听机制有很大的不同。

两个部分的独立增加了组件开发的可选择性：可以选择用 MVVM 模式开发，可以用传统的 DOM 操作开发，也可以两者混合开发。

**mvvm 对 sugar 没有任何依赖，如果只需要 mvvm 的功能而不需要组件功能可直接使用 mvvm.js **。

`sugar` 的组件系统实现原理可以参考 [sugar](sugar.html) 的文档； `mvvm` 的实现原理可以参考这篇文章：[利用 JavaScript 数据绑定实现一个简单的 MVVM](https://segmentfault.com/a/1190000004847657)。


# 4. 使用环境和兼容性

* `sugar.js` 和 `mvvm.js` 都利用 webpack 进行了 [UMD](https://github.com/umdjs/umd#readme) 包装，支持 `AMD` `CMD` 和 `script` 标签引用。

* 没有任何第三方库依赖，都是用原生 javascript 来实现，用了比较多的 `ES5` 特性，所以不支持低版本 IE。


# 5. 一些使用示例

* [打星评分组件](http://tangbc.github.io/sugar/demos/star/)
* [简单的日期选择组件](http://tangbc.github.io/sugar/demos/date/)
* 本页面也是用 `sugar` 开发的，各组件源代码在 [gh-pages](https://github.com/tangbc/sugar/tree/gh-pages) 分支上

欢迎各种吐槽、意见和 [issue](https://github.com/tangbc/sugar/issues) 反馈！
