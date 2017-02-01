{% comment %}
Admittedly needs to be rethought. By reducing asides of the site, the thought is to emphasize sharing content over sharing the site itself.
{% endcomment %}
<script>
if (window.location.search.indexOf('hide-asides') != -1) {
	console.log("Hiding assides...");
	document.styleSheets[0].insertRule('.aside { display: none; }', 0);
}
</script>