'use strict';

(function() {
    var WHEREABOUTS = [
        'working on his personal brand',
        'working on his personal gastric band',
        'at home writing medium posts',
        'fuck knows!',
        'project managing',
        'commuting to work ... by narrow boat',
        'having a cigarette',
        'having a coffee and quinoa in a startup restaurant',
        'watching an art house film in a rooftop cinema',
        'in Dalston seeing a band he read about in Pitchfork Media',
        'writing Ruby',
        'in Brooklyn eating a ramen burger',
        'at a pop-up restaurant in a bathroom in Walthamstow',
        'at Lidl buying ironically unethical Brussels sprouts',
        'in Peckham, like everybody else',
        'wearing a suit and tie in the office',
        'campaigning for the Labour party in an Armani suit',
        'preening his beard',
        'applying for Alan\'s job',
        'in an artisan tailors purchasing a foppish yet sophisticated new suit'
    ];

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomLocation() {
        return WHEREABOUTS[getRandomInt(0, WHEREABOUTS.length)];
    }

    document.querySelector('.js-whereabouts').innerHTML = getRandomLocation();
})();
