define('ClickEvents', [], function() {
    'use strict';

    var elf = {};
    elf.run = {};

    elf.ClickEvents = (function() {
        const listItem = document.getElementsByClassName('listItem');
        const intro = document.getElementById('intro');

        function ClickEvents() {
            intro.innerHTML =
                'ClickEvents is loaded. Click the three items seen below.';
            intro.className = 'blue';

            for (const item of listItem) {
                item.addEventListener('click', listClick);
                console.log(item);
            }
        }

        var listClick = function(event) {
            const clickText = event.target.innerText;
            const prompt = 'You selected: ';
            intro.innerHTML =
                prompt + '<span id="pick">' + clickText + '</span>';
        };

        return ClickEvents;
    })();

    return elf.ClickEvents;
});
