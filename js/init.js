// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min",
      'soundmanager2': '//common.publicradio.org/media_player/1.2.2/script/lib/soundmanager2-jsmin',
      'apmplayer': '//common.publicradio.org/media_player/1.2.2/script/apmplayer-all.min'
    },
    "shim": {
        "jquery.pjax": ["jquery"],
        'soundmanager2': {
            exports: 'soundManager'
        },
        'apmplayer': {
        	exports: 'apmplayer_ui',
        	deps: ["jquery",'soundmanager2']
        }
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
