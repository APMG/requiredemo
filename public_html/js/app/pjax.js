define(["jquery", 'jquery-pjax'], function ($) {
    // technically we might not need to load jquery-pjax here if we don't have pushState/history
    // but, we care less about performance in IE/desktop, so...
    'use strict';


    function pjaxScanLinks(container){
        $(container).find('a').each(function(){
            if (this.host === window.location.host){
                $(this).attr('data-pjax','true');
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
});