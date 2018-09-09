module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: '<json:package.json>',

        jshint: {
            files: ['**/*.js'],

            options: {
                ignores: ['**/node_modules/**', '**/bower_components/**'],
                reporter: require('jshint-stylish'),
                strict: true,
                jasmine: true
            }
        },

        clean: {
            yourTarget: {
                src: ['**/node_modules/**', '**/bower_components/**']
            }
        },

        jscs: {
            src: '**/*.js',
            options: {
                config: '.jscsrc'
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
        },

        exec: {
            pretty: {
                cmd: './prettier'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-prettier');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-exec');
    //grunt.registerTask('pretty', ['pretty']);
    grunt.registerTask('pretty', ['exec:pretty']);
    grunt.registerTask('check', ['pretty', 'jscs', 'jshint']);
    grunt.registerTask('test', ['jshint', 'karma']);
};
