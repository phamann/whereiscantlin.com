'use strict';

(function() {
	var WHEREABOUTS = [
		'working on his personal brand',
		'at home writing medium posts',
		'fuck knows!',
		'project managing',
		'having a cigarette',
		'having a coffee and quinoa in a startup restaurant',
		'writing Ruby'
	];

	function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomLocation() {
        return WHEREABOUTS[getRandomInt(0, WHEREABOUTS.length)];
    }

	document.querySelector('.js-whereabouts').innerHTML = getRandomLocation();
})();