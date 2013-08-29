module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: require('./package'),

        requirejs: {
            compile: {
                options: {
                    mainConfigFile: "js/init.js",
                    out: "js/init.min.js",
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    optimize: "uglify2",
                    skipModuleInsertion: false,
                    name: "init",
                    baseUrl: "js/",
                }
            }
        },

        //compress(uglify) require.js itself
        uglify: {
            requirejs: {
                files: {
                    'js/vendor/require.min.js': ['js/vendor/requirejs/require.js']
                }
            }
        },


        concat: {
            options: {
                separator: ';',
            },
            deploy: {
                src: ['js/vendor/require.min.js', 'js/init.min.js'],
                dest: 'js/all.libs.min.js',
            },
        },

        // Build modernizr
        modernizr: {
            devFile: 'js/vendor/modernizr/modernizr.js',
            outputFile : 'js/vendor/modernizr.min.js',

            extra: {
                shiv: true,
                mq: true
            },

            // Minify
            uglify: true,

            // Files
            files: ['js/init.js', 'js/app/*.js', 'scss/**/*.scss']
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'js/init.js',
                'js/app/*.js'

            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        sass: {
            dev: {
                options: {
                    unixNewlines: true,
                    style: 'expanded'
                },
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            },
            deploy: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/main.min.css': 'scss/main.scss'
                }

            }
        },

        watch: {

            scss: {
                files: ['scss/**/*.scss'],
                tasks: 'sass:dev'
            },

            js: {
                files: [
                    'Gruntfile.js',
                    'js/init.js',
                    'js/app/*.js'
                ],
                tasks: 'jshint'
            }
        } ,
        bower: {
          install: {
            //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('deploy', ['jshint', 'sass:deploy', 'requirejs', 'modernizr', 'uglify:requirejs', 'concat:deploy']);

    grunt.registerTask('default', ['jshint', 'sass:dev']);

};