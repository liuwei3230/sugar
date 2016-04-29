define([
	'sugar',
	'../lib/prism',
	'../lib/marked.min'
], function(sugar, prism, marked) {

	/**
	 * 通用 markdown 渲染模块，进行 markdown 文件的拉取及渲染成 html
	 */
	var MarkdownRender = sugar.Component.extend({
		init: function(config) {
			config = this.cover(config, {
				'url': 'markdown 拉取地址，在具体的模块中配置 ~~'
			});
			this.Super('init', arguments);
		},

		// 视图初始化完毕
		viewReady: function() {
			// 异步拉取 markdown 文件内容进行渲染
			sugar.ajax.load(this.getConfig('url'), this.afterLoad, this);
		},

		// markdown 数据加载回调
		afterLoad: function(err, data) {
			if (err) {
				sugar.util.error('Markdown 文件拉取失败！', err);
				return;
			}

			var renderer = new marked.Renderer();
			// 渲染标题锚点
			renderer.heading = function(text, level) {
				var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
				// var svg = [
				// 	'<svg aria-hidden="true" class="octicon octicon-link" height="16" version="1.1" viewBox="0 0 16 16" width="16">',
				// 		'<path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z">',
				// 		'</path>',
				// 	'</svg>'
				// ].join('');

				return [
					'<h' + level + '>',
						'<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">',
							// '<span class="header-link">'+ svg +'</span>',
							text,
						'</a>',
					'</h' + level + '>'
				].join('');
			},

			// markdown 格式转成 html
			this.el.innerHTML = marked(data.result, {'renderer': renderer});

			// 高亮代码
			prism.highlightAll();

			// 通知侧边导航栏
			this.notify('main.aside', 'markdownRendered');
		}
	});

	return MarkdownRender;
});