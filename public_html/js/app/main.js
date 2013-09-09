define(["jquery", 'jquery-pjax'], function ($) {
    // technically we might not need to load jquery-pjax here if we don't have pushState/history
    // but, we care less about performance in IE/desktop, so...
    'use strict';


    function pjaxScanLinks(container){
        console.log(container);
        $(container).find('a').each(function(){
            if (this.host === window.location.host){
                $(this).attr('data-pjax','true');
                console.log(this);
            }
        });
    }

    
    // Only load pjax if html5 pushState (history) is available in this browser 
    if (Modernizr.history){

        pjaxScanLinks('#pjax-container');

        $(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');
        // We need to check the incoming data for any links to the site itself
        // For now, this is just the host, but in the future it will need to look at URL patterns
        $('#pjax-container').on('pjax:end', function(event){
            pjaxScanLinks(event.target);
        });
    }

    //fake load media player
    $('#mediaPlayer').on('click', function (e) {
        var self = this;
        if (!Modernizr.history){ //no history, no pjax, so media opens in new window
            window.open(this.href, 'streams', 'width=750,height=500,scrollbars=1');
            return false;
        } else {
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
        }
        e.preventDefault();
    });
});