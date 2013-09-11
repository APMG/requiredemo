define(["jquery", 'scrollMonitor'], function ($, scrollMonitor) {
    'use strict';
    /* Create our watcher for the scroll event
     * Use half the viewport height as the offset -- this seems to be right about when the 
     * paginators line up with the box on the page that should contain them 
     */
    var $element = $('#paginators');
    var watcher = scrollMonitor.create( $element, scrollMonitor.viewportHeight/2 );


    watcher.fullyEnterViewport(function() {
        /* The contents of this function should only fire on medium and larger screens 
         * using the check utility elements here for this
        */
        if ( $("#checkSmall").is(':hidden')  ){
            //console.log('stateChange!');
            //console.log(this);
            $element.find('a').addClass('notfixed').css('top',$element.position().top);
        }
    });

});