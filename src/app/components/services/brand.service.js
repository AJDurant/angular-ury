(function() {
  'use strict';

    angular
        .module('ury')
        .service('uryBrand', uryBrand);

    /** @ngInject */
    function uryBrand () {
        var flagship = /^URY\s?(Breakfast|Brunch|Lunch|:PM)/i;
        var news = /^(URY (News|Sports|Football|Election)|Candidate Interview Night|Election Results Night|YUSU Election|York Sport Report)/i;
        var speech = /^(URY Speech|YorWorld|In the Stalls|Screen|Stage|Game Breaking|Radio Drama)/i;
        var events = /(Roses (Live )?\d{4}|Woodstock|Fresher'?s)/i;

        this.getBrand = function (title, time) {
            if (flagship.test(title)) {
                return 'Flagship';
            } else if (news.test(title)) {
                return 'News';
            } else if (speech.test(title)) {
                return 'Speech';
            } else if (events.test(title)) {
                return 'Event';
            } else if (time.hour() >= 21 || (time.hour() >=0 && time.hour() < 6)) {
                return 'Music';
            }

            return '';
        };
    }
})();
