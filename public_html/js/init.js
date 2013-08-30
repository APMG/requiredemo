// Place third party dependencies in the vendor folder
//
// Configure loading modules from the base directory,
// except 'app' ones, 
 
"use strict";

requirejs.config({
		"baseUrl": "js/",
		"paths": {
			"app": "app",
			"jquery": "../../vendor/jquery/jquery",
			"jquery-pjax": "../../vendor/jquery-pjax/jquery.pjax",
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

// Load the main app module to start the app
requirejs(["app/main"]);
