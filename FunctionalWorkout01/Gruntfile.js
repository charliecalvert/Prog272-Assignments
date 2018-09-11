module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: '<json:package.json>',

        clean: {
            yourTarget: {
                src: ['**/node_modules/**', '**/components/**']
            }
        },

        pug: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: false
                    }
                },
                files: {
                    'spec/fixtures/fixture.html': [
                        'views/fixture.pug',
                        '$ELF_TEMPLATES/JadeMixins/*.pug'
                    ]
                }
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
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('fixture', ['exec:stripExtends', 'jade', 'karma']);
    grunt.registerTask('test', ['karma']);
};
