module.exports = function (grunt) {

    'use strict';

    // Register various packages/tasks we're going to use
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-modernizr');
    //grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-phpunit');


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
            files: ['public_html/js/init.js', 'public_html/js/app/*.js', 'app/less/**/*.less']
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

        less: {
            dev: {
                options: {
                    //paths: ["/css"]
                    dumpLineNumbers: true,
                    relativeUrls: true
                },
                files: {
                    'public_html/css/main.css': 'app/less/main.less',
                    'public_html/css/ie8_compat.css': 'app/less/ie8_compat.less'
                }
            },
            deploy: {
                options: {
                    //paths: ["assets/css"],
                    yuicompress: true,
                    relativeUrls: true
                },
                files: {
                    'public_html/css/main.min.css': 'app/less/main.less',
                    'public_html/css/ie8_compat.min.css': 'app/less/ie8_compat.less'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            less: {
                files: ['app/less/**/*.less'],
                tasks: 'less:dev'
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

        phpunit: {
            classes: {
                dir: 'tests/'
            },
            options: {
                bin: 'vendor/bin/phpunit'
            }
        }

        // bower: {
        //   install: {
        //     options: {
        //         targetDir : 'public_html/vendor'
        //     }
        //     //just run 'grunt bower:install' and you'll see files from your Bower packages in lib directory
        //   }
        // }
    });

    grunt.registerTask('deploy', ['phpunit', 'jshint', 'less:deploy', 'requirejs', 'modernizr', 'uglify:requirejs', 'concat:deploy']);

    grunt.registerTask('default', ['jshint', 'less:dev']);

    grunt.registerTask('test', ['phpunit']);

};