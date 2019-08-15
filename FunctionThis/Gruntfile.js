module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        pkg: '<json:package.json>',

        clean: {
            yourTarget: {
                src: ['**/node_modules/**', '**/components/**']
            }
        },

        jscs: {
            src: '**/*.js',
            options: {
                config: '.jscsrc'
            }
        },

        exec: {

            stripExtends: {
                cmd: function() {
                    return 'sed "/extend/d" views/index.jade > views/fixture.jade';
                }
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
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('fixture', ['exec:stripExtends', 'karma']);
    grunt.registerTask('test', ['karma']);
};
