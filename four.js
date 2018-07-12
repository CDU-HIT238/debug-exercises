
document.addEventListener('DOMContentLoaded', function() {
	var items = [
		'<a class="previousLink" href="one.html">First question</a>',
		'<a class="previousLink" href="two.html">Second question</a>',
		'<a class="previousLink" href="three.html">Third question</a>',
		'<a class="nextLink" href="five.html">Next question</a>'
	];
	var nextLink = undefined;

	items.forEach(function(item) {
		var nextLink = item;
	});

	if(nextLink) {
		document.querySelector('#answer')
			.innerHTML = nextLink;
	}
});
		

