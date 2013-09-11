define(["jquery", 'scrollMonitor'], function ($, scrollMonitor) {
    'use strict';
    console.log(scrollMonitor.viewportHeight);
    var $element = $('#paginators');
    
    var watcher = scrollMonitor.create( $element, scrollMonitor.viewportHeight/2 );

    //console.log(watcher);

    watcher.fullyEnterViewport(function() {
        console.log('stateChange!');
        console.log(this);
        $element.find('a').addClass('notfixed').css('top',$element.position().top); //

        //console.log
    });

});