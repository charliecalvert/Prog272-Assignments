module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: '<json:package.json>',

        clean: {
            yourTarget: {
                src: ['**/node_modules/**', '**/bower_components/**']
            }
        },

        prettier: {
            files: [
                '**/*.js',
                '!**/node_modules/**',
                '!**/bower_components/**'
            ],
            options: {
                indentSize: 4
            }
        },

        karma: {
            karma: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('pretty', ['exec:pretty']);
    grunt.registerTask('check', ['pretty']);
    grunt.registerTask('test', ['karma']);
};
