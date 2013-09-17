define(['jquery','scrollMonitor' ], function ($, scrollMonitor) {
    'use strict';
    /* Create our watcher for the scroll event
     * Use half the viewport height as the offset -- this seems to be right about when the 
     * paginators line up with the box on the page that should contain them 
     */

    function watchPaginators(){
        var $element = $('#paginators');
        if ($element.length > 0){
            var watcher = scrollMonitor.create( $element, scrollMonitor.viewportHeight/2);

            // TODO: This is currently broken in IE 10
            // Fix it.
            watcher.fullyEnterViewport(function() {
                // somewhat redundant, but we need to re-query the element every time
                // it can get out of whack by pjax
                $element = $('#paginators');
                // The contents of this function should only fire on medium and larger screens 
                if ( $("#checkSmall").is(':hidden')  ){
                    $element.find('a').addClass('notfixed').css('top',$element.position().top);
                }
            });
        }
    }

    /* 
     * Helper to add touch events
     * broken out into seperate function because we need to re-attach events after pjax
     */
    function bindTouchEvents(){

        $('#paginators').on('touchstart', 'a', function(e){

            if ($(this).hasClass('clicked')){
                $(this).click();
            }

            if (e.type === 'touchstart'){
                $(this).addClass('clicked');

                //close them after a while
                window.setTimeout(function(){
                    $('#paginators a').removeClass('clicked');
                }, 8000);
            }
            
            e.preventDefault();  //make sure the event doesnt bubble up to the document, where we're watching for clicks to close
            e.stopPropagation();
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

    // here we bind events for touch devices, ignored for others
    if (Modernizr.touch){

        bindTouchEvents(); //attach touch events on load
        
        $(document).on('pjax:complete', function(){
            bindTouchEvents(); //re-attach touch events after pjax done
        });

        //hide the paginators when any other part of the document is clicked
        $(document).on('touchstart', function() {
            $('#paginators a').removeClass('clicked');
        });

    }


});