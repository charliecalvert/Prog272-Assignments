/* global process: true */

module.exports = function(config) {
    'use strict';

    var puppeteer = require('puppeteer');
    process.env.CHROME_BIN = puppeteer.executablePath();

    config.set({
        // base path, that will be used to resolve files and exclude
        basePath: './',

        frameworks: ['jasmine'],

        files: [
            'public/bower_components/jquery/dist/jquery.min.js',
            'node_modules/jasmine-jquery/lib/*.js',
            'public/javascripts/*.js',
            'spec/**/*.html',
            'spec/test*.js'
        ],

        // list of files to exclude
        exclude: [],

        reporters: ['spec'],

        specReporter: { suppressSkipped: true },

        // web server port
        port: 9876,

        preprocessors: { '**/*.html': [] },

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        // CLI --auto-watch --no-auto-watch
        autoWatch: true,

        // Start these browsers, currently available:
        browsers: ['ChromeHeadless'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 20000,

        // Set to false to watch files for changes
        singleRun: true,

        plugins: [
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-chrome-launcher'
        ]
    });
};
