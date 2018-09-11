/**
 * @author Charlie Calvert
 */

require.config({
    baseUrl: '.',
    paths: {
        //jquery: 'bower_components/jquery/dist/jquery.min',
        ClickEvents: 'javascripts/click-events',
        domReady: 'javascripts/dom-ready'
    }
});

require(['domReady!', 'ClickEvents'], function(doc, ClickEvents) {
    'use strict';

    console.log('main called');

    console.log('DOM fully loaded and parsed');
    new ClickEvents();

    /*window.onload = () => {
        new ClickEvents();
    };*/
});
