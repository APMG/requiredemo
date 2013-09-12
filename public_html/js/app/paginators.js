define(['jquery','scrollMonitor' ], function ($, scrollMonitor) {
    'use strict';
    
    // $(function(){
    //     require(["jquery", "scrollMonitor"], function ($, scrollMonitor) {
    //         var $element = $('#paginators');
    //         console.log($element);
    //         var watcher = scrollMonitor.create( $element, scrollMonitor.viewportHeight/2);
    //         console.log(watcher);

    //         watcher.fullyEnterViewport(function() {
    //             // The contents of this function should only fire on medium and larger screens 
    //             if ( $("#checkSmall").is(':hidden')  ){
    //                 console.log('stateChange!');
    //                 console.log(this);
    //                 $element.find('a').addClass('notfixed').css('top',$element.position().top);
    //             }
    //         });
    //     });
    // });


   // $(function(){
   //      console.log(scrollMonitor);
   //      console.log($(document).height());
   //      //console.log(scrollMonitor);
   // });
   // console.log($(document).height());
    // console.log($,scrollMonitor);

    /* Create our watcher for the scroll event
     * Use half the viewport height as the offset -- this seems to be right about when the 
     * paginators line up with the box on the page that should contain them 
     */
    //$(document).ready(function(){
        var $element = $('#paginators');
        console.log($element, scrollMonitor.viewportHeight/2);
        var watcher = scrollMonitor.create( $element, scrollMonitor.viewportHeight/2);
        console.log(watcher);

        // TODO: This is currently broken in IE 10
        // Fix it.
        watcher.fullyEnterViewport(function() {
            // The contents of this function should only fire on medium and larger screens 
            if ( $("#checkSmall").is(':hidden')  ){
                console.log('stateChange!');
                console.log(this);
                $element.find('a').addClass('notfixed').css('top',$element.position().top);
            }
        });
    //});
});