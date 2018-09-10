define('ClickEvents', ['jquery'], function($) {
    'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = (function() {
        var listItem = $('.listItem');
        var intro = $('#intro');

        function ClickEvents() {
            $(intro).html(
                'ClickEvents is loaded. Click the three items seen below.'
            );
            $(intro).addClass('blue');
            $(listItem).click(listClick);
        }

        var listClick = function(event) {
            var clickText = event.target.innerText;
            var prompt = 'You clicked: ';
            $(intro).html(prompt + clickText);
        };

        return ClickEvents;
    })();

    return elf.ClickEvents;
});
