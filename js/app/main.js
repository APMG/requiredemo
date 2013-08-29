define(["jquery", 'jquery-pjax'], function ($) {
    'use strict';
    //the jquery and jquery pjax has been loaded.
    $(function () {
        $(document).pjax('a', '#pjax-container');
        //fake load media player
        $('#mediaPlayer').on('click', function (e) {
            var self = this;
            console.log(typeof soundManager);
            require(["jquery", "soundmanager2", 'apmplayer'], function (jquery, soundManager, apmplayer) {

                console.log(typeof soundManager);
                console.log('url:', soundManager.url);
                console.log(apmplayer);
                if (soundManager.supported()) {
                    $(self).text('Media player loading...');
                    soundManager.setup({ url: 'http://common.publicradio.org/media_player/1.2.2/script/lib/swf/' });
                    soundManager.beginDelayedInit();
                    soundManager.onready(function () {
                        $(self).text('Media player loaded');
                    });
                }
                
            });
            e.preventDefault();
        });

    });
});

