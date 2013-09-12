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
        console.log('scanning links for things that should be pjax');
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
       
    //fire off ads and analytics on initla load, for every browser
    resetAds();
    fireAnalytics();

    // Only load pjax if html5 pushState (history) is available in this browser 
    if (Modernizr.history){
        // Right now there is some repetition in here, calling scanLinks, etc, several times
        // that can probably be cleaned up
        pjaxScanLinks('#pjax-container');

        $(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');
        
        // Running pjaxScanLinks on pjax:complete is necessary for event compatability with IE 10
        // pjax:end and scanning the incoming contents doens't seem to work otherwise
        $(document).on('pjax:complete', function(){
            pjaxScanLinks('#pjax-container');
            resetAds();
            fireAnalytics();
        });
    } 
});