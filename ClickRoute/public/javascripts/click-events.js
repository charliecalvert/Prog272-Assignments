define('ClickEvents', ['jquery'], function($) {
    'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = (function() {
        const listItem = document.getElementsByClassName('.listItem');
        const intro = document.getElementById('#intro');

        function ClickEvents() {
            $(intro).html('ClickEvents is loaded. Click the three items seen below.');
            $(intro).addClass('blue');
            $(listItem[0]).click(listClick);
        }

        var listClick = function(event) {
            const clickText = event.target.innerText;
            const prompt = 'You clicked: ';
            $(intro).html(prompt + clickText);
        };

        return ClickEvents;
    })();

    return elf.ClickEvents;
});
