document.addEventListener('DOMContentLoaded', function() {
	var nextLink = undefined;

	/**
	 * Set link data
	 * Saves link data to nextLink variable
	 **/
	function setData() {
		nextLink = '<a class="nextLink" href="four.html">Next question</a>';
	}

	/**
	 * Show the next link
	 * Appends the nextLink to the target zone
	 **/
	function showLink() {
		var target = document.querySelector('#answer');
		taget.innerHTML = nextLink;
	}

	/**
	 * Run the exercise
	 * Sets and displays the link after half a second
	 **/
	function run() {
		setTimeout(function() {
			setData();
		}, 500);
		showLink();
	};

	run;
});
		

