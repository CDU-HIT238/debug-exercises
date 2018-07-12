document.addEventListener('DOMContentLoaded', function() {
	var items = [
		{
			text: 'Last question',
			url: 'one.html',
			className: 'lastLink'
		},
		{
			text: 'Next question',
			url: 'three.html',
			className: 'nextLink'
		}
	];

	var target = document.getElementById('answer');
	for(var i = 0; i < items.length; i++) {
		if(items.text) {
			var link = document.createElement('a');
			link.href = items.href;
			link.className = items.className;
			link.innerHTML = items.text;
			target.appendChild(link);
		}
	}
});
