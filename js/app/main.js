define(["jquery",'jquery.pjax'], function($) {
    //the jquery and jquery pjax has been loaded.
    $(function() {
        console.log('init starting');

        $(document).pjax('a', '#pjax-container');


        //fake load media player
        $('#mediaPlayer').on('click',function(e){
        	require(["jquery","soundmanager2",'apmplayer'], function(jquery, soundManager, apmplayer) {
			    
			    soundManager.setup({ url: 'http://common.publicradio.org/media_player/1.2.2/script/lib/swf/' });
			    soundManager.beginDelayedInit();
			    //do sound manager loading things here

			    
			});
			e.preventDefault();
        });

    });
});

