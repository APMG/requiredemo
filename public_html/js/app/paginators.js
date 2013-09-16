define(['jquery','scrollMonitor' ], function ($, scrollMonitor) {
    'use strict';
    /* Create our watcher for the scroll event
     * Use half the viewport height as the offset -- this seems to be right about when the 
     * paginators line up with the box on the page that should contain them 
     */

    function watchPaginators(){
        var $element = $('#paginators');
        if ($element.length > 0){
            console.log($element, scrollMonitor.viewportHeight/2);
            var watcher = scrollMonitor.create( $element, scrollMonitor.viewportHeight/2);
            console.log(watcher);

            // TODO: This is currently broken in IE 10
            // Fix it.
            watcher.fullyEnterViewport(function() {
                // somewhat redundant, but we need to re-query the element every time
                // it can get out of whack by pjax
                $element = $('#paginators');
                // The contents of this function should only fire on medium and larger screens 
                if ( $("#checkSmall").is(':hidden')  ){
                    console.log('stateChange!');
                    console.log(this);
                    $element.find('a').addClass('notfixed').css('top',$element.position().top);
                }
            });
        }
    }

    function bindTouchEvents(){

        $('#paginators').on('touchstart', 'a', function(e){
            console.log('event:', e.type);
            console.log('touchstart');

            if ($(this).hasClass('clicked')){
                //$(this).click();
                console.log('fire pjax here');
                $(this).click();
            }

            if (e.type === 'touchstart'){
                $(this).addClass('clicked');
            }
            
            e.preventDefault();
        });


        $('#paginators').on('click','a', function(e){
            e.preventDefault();
            //return false;
        });
    }

    var $element = $('#paginators');

    // If there are no paginators, we add an event to pjax:complete to try adding watchPaginators later
    // This way if we come to a page w/o paginators, they will work correctly after pjax
    if ($element.length === 0){
        $(document).on('pjax:complete', function(){
            watchPaginators();
        });
    } else {
        watchPaginators();
    }

    $(document).on('pjax:complete', function(){
        bindTouchEvents();
    });

    // here we bind events for touch devices
    if (Modernizr.touch){

        bindTouchEvents();

        $(window).on('scroll', function(){
            $('#paginators a').removeClass('clicked');
        });
    }


});