'use strict';

(function() {
	var WHEREABOUTS = [
		'working on his personal brand',
		'at home writing medium posts',
		'fuck knows!',
		'project managing',
		'having a cigarette',
		'Having a coffee and quinoa in a startup restaurant',
		'Writing Ruby'
	];

	function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomLocation() {
        return WHEREABOUTS[getRandomInt(1, WHEREABOUTS.length) - 1];
    }

	document.querySelector('.js-whereabouts').innerHTML = getRandomLocation();
})();