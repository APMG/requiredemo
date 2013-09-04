module.exports = function (grunt) {

    'use strict';

    // Register various packages/tasks we're going to use
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-modernizr');
    //grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');


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
                    'public_html/js/require.min.js': ['public_html/vendor/requirejs/require.js']
                }
            }
        },

        concat: {
            options: {
                separator: ';',
            },
            deploy: {
                src: ['public_html/js/require.min.js', 'public_html/js/init.min.js'],
                dest: 'public_html/js/all.min.js',
            },
        },

        // Build modernizr
        modernizr: {
            devFile: 'public_html/vendor/modernizr/modernizr.js',
            outputFile : 'public_html/js/modernizr.min.js',

            extra: {
                shiv: true,
                mq: true
            },

            // Minify
            uglify: true,

            // Files
            files: ['public_html/js/init.js', 'public_html/js/app/*.js', 'app/scss/**/*.scss']
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
                    cacheLocation: '/tmp/require/sass-cache',
                    unixNewlines: true,
                    style: 'expanded'
                },
                files: {
                    'public_html/css/main.css': 'app/scss/main.scss',
                    'public_html/css/ie8_compat.css': 'app/scss/ie8_compat.scss'
                }
            },
            deploy: {
                options: {
                    cacheLocation: '/tmp/require/sass-cache',
                    style: 'compressed'
                },
                files: {
                    'public_html/css/main.min.css': 'app/scss/main.scss',
                    'public_html/css/ie8_compat.min.css': 'app/scss/ie8_compat.scss'
                }

            }
        },

        watch: {
            options: {
                livereload: true,
            },
            scss: {
                files: ['app/scss/**/*.scss'],
                tasks: 'sass:dev'
                
            },
            // tpl: {
            //     files: ['app/*'],
            //     tasks: 
            // },

            js: {
                files: [
                    'Gruntfile.js',
                    'public_html/js/init.js',
                    'public_html/js/app/*.js'
                ],
                tasks: 'jshint'
            }
        },

        // bower: {
        //   install: {
        //     options: {
        //         targetDir : 'public_html/vendor'
        //     }
        //     //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
        //   }
        // }
    });


    grunt.registerTask('deploy', ['jshint', 'sass:deploy', 'requirejs', 'modernizr', 'uglify:requirejs', 'concat:deploy']);

    grunt.registerTask('default', ['jshint', 'sass:dev']);

};