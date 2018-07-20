document.addEventListener('DOMContentLoaded', function() {

	/*
	 * Get a link to the provided page
	 * @param {number} index Index for the page to get link to
	 * @return {Element} An anchor element linking to the requested page
	 **/
	function getLink(index) {
		var links = [
			'one.html',
			'two.html',
			'three.html',
			'four.html',
			'five.html',
			'six.html'
		];
		var url = links[index];
		var anchor = document.createElement('a');
		anchor.classList.add('previousLink');
		anchor.href = url;
		anchor.innerHTML = 'Next question';

		return anchor;
	};
		
	var link = getLink(6);
	var target = document.querySelector('#answer');
	target.appendChild(link);
});
		

