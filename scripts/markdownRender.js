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
				'hasAnchor': true,
				'url'      : 'markdown 拉取地址，在具体的模块中配置 ~~'
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
			var renderer;

			if (err) {
				sugar.util.error('Markdown 文件拉取失败！', err);
				return;
			}

			if (this.getConfig('hasAnchor')) {
				renderer = new marked.Renderer();
				// 渲染标题锚点
				renderer.heading = function _render(text, level) {
					var escapedText = text.replace(/<(\w+)>|<\/(\w+)>|\(.*\)/g, '').replace(/[\d\.\s]+/g, '-');
					return [
						'<h' + level + '>',
							'<a name="' + escapedText + '" class="anchor" href="#' + escapedText + '">',
								text,
							'</a>',
						'</h' + level + '>'
					].join('');
				}
			}

			// markdown 格式转成 html
			this.el.innerHTML = marked(data.result, {'renderer': renderer});

			// 高亮代码
			prism.highlightAll();

			// 发送渲染完毕消息
			this.fire('markdownRendered', this.afterMessage);
			// this.notify('main.aside', 'markdownRendered');
			// this.notify('main.footer', 'markdownRendered');
		},

		// 定位滚动条至锚点位置
		afterMessage: function() {
			var uri = window.location.toString();
			var anchor = uri.split('#')[1], elm, top = 0;

			if (anchor) {
				elm = document.querySelector('a.anchor[href="#'+ decodeURIComponent(anchor) +'"]');

				if (!elm) {
					return;
				}

				top = elm.offsetTop;

				while (elm = elm.offsetParent) {
					top += elm.offsetTop;
				}

				window.scrollTo(0, top);
			}
		}
	});

	return MarkdownRender;
});