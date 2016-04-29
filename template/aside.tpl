<li v-for="item in items">
	<a v-bind:href="item.href">{{ item.text }}</a>
</li>