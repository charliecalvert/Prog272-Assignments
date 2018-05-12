/**
 * @author Charlie Calvert
 */

require.config({
    baseUrl: '.',
    paths: {
        jquery: 'bower_components/jquery/dist/jquery.min',
        ClickEvents: 'javascripts/click-events'
    }
});

require(['jquery', 'ClickEvents'], function($, ClickEvents) {
    'use strict';

    console.log('main called');
    $(document).ready(function() {
        new ClickEvents();
    });
});
