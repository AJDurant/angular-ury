'use strict';

angular.module('ury')
    .service('uryBrand', function() {
        var flagship = /^URY\s?(Breakfast|Lunch|:PM)/i;
        var news = /^(URY (News|Sports|Football|Election)|Candidate Interview Night|Election Results Night|YUSU Election)/i;
        var speech = /^(URY Speech|YorWorld|In the Stalls|Screen|Stage|Game Breaking|Radio Drama)/i;
        var events = /(Roses (Live )?\d{4}|Woodstock)/i;

        this.getBrand = function (title, time) {
            if (flagship.test(title)) {
                return 'Flagship';
            } else if (news.test(title)) {
                return 'News';
            } else if (speech.test(title)) {
                return 'Speech';
            } else if (events.test(title)) {
                return 'Event';
            }

            return '';
        };
});
