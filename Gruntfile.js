module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        pkg: require('./package'),

        requirejs: {
            compile: {
                options: {
                    mainConfigFile: "public_html/js/init.js",
                    out: "public_html/js/init.min.js",
                    generateSourceMaps: false,
                    preserveLicenseComments: false,
                    optimize: "uglify2",
                    skipModuleInsertion: false,
                    name: "init",
                    baseUrl: "public_html/js/",
                }
            }
        },

        //compress(uglify) require.js itself
        uglify: {
            requirejs: {
                files: {
                    'public_html/js/require.min.js': ['vendor/requirejs/require.js']
                }
            }
        },


        concat: {
            options: {
                separator: ';',
            },
            deploy: {
                src: ['public_html/js/require.min.js', 'public_html/js/init.min.js'],
                dest: 'public_html/js/all.libs.min.js',
            },
        },

        // Build modernizr
        modernizr: {
            devFile: 'vendor/modernizr/modernizr.js',
            outputFile : 'public_html/js/modernizr.min.js',

            extra: {
                shiv: true,
                mq: true
            },

            // Minify
            uglify: true,

            // Files
            files: ['public_html/js/init.js', 'public_html/js/app/*.js', 'scss/**/*.scss']
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'public_html/js/init.js',
                'public_html/js/app/*.js'

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
                    'public_html/css/main.css': 'scss/main.scss'
                }
            },
            deploy: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'public_html/css/main.min.css': 'scss/main.scss'
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
                    'public_html/js/init.js',
                    'public_html/js/app/*.js'
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
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('deploy', ['jshint', 'sass:deploy', 'requirejs', 'modernizr', 'uglify:requirejs', 'concat:deploy']);

    grunt.registerTask('default', ['jshint', 'sass:dev']);

};