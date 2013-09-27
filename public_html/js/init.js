// Place third party dependencies in the vendor folder
//
// Configure loading modules from the base directory,
// except 'app' ones, 
 
"use strict";

requirejs.config({
        "baseUrl": "/js/",
        "paths": {
            "app": "app",
            "jquery": "../vendor/jquery/jquery",
            "jquery-pjax": "../vendor/jquery-pjax/jquery.pjax",
            'scrollMonitor': "../vendor/scrollMonitor/scrollMonitor",
            'soundmanager2': '//common.publicradio.org/media_player/1.2.2/script/lib/soundmanager2-jsmin',
            'apmplayer': '//common.publicradio.org/media_player/1.2.2/script/apmplayer-all.min'
        },
        "shim": {
                "jquery-pjax": ["jquery"],
                'soundmanager2': {
                        exports: 'soundManager'
                },
                'apmplayer': {
                    exports: 'apmplayer_ui',
                    deps: ["jquery", 'soundmanager2']
                }
        }
});

// Load the main app modules to start the app
requirejs(["app/pjax"]);            // handles links
requirejs(["app/mediaplayer"]);     // handles media player
requirejs(["app/paginators"]);      // handles prev/next pagination
requirejs(["app/nav"], function(nav){ nav.init(); });             // for navigational bar