define(["jquery", 'jquery-pjax'], function ($) {
    // technically we might not need to load jquery-pjax here if we don't have pushState/history
    // but, we care less about performance in IE/desktop, so...
    'use strict';

    /**
     * Helper function to scan links in incoming html, append the data-pjax attr
     * if necessary. This makes sure if internal page links are present, pjax loading
     * will fire, and everyone will be happy
     * @param {string} element or css selector for new content that needs to be scanned
     * @return {undefined}
     */
    function pjaxScanLinks(container){
        $(container).find('a').each(function(){
            if (this.host === window.location.host){
                $(this).attr('data-pjax','true');
            }
        });
    }

    /**
     * Wrapper function for necessary logic to change ads on site when pjax changes
     * TODO: Make this actually work
     * @return {undefined} 
     */
    function resetAds(){
        console.log('placeholder for changing ads on pjax load');
    }

    /** 
     * Wrapper function for firing analytics events
     * @return {undefined}
     */
    function fireAnalytics(){
        console.log('placeholder for analytics pageload calls');
    }
    
    // Only load pjax if html5 pushState (history) is available in this browser 
    if (Modernizr.history){

        pjaxScanLinks('#pjax-container');
        $(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');
        // We need to check the incoming data for any links to the site itself
        // For now, this is just the host, but in the future it will need to look at URL patterns
        $('#pjax-container').on('pjax:end', function(event){
            pjaxScanLinks(event.target);

            // It mgiht make sense to break these functions out to seperate files and have them watch for pjax:end event
            resetAds();
            fireAnalytics();
        });
    }
});