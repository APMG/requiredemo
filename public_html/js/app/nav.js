define(["jquery"], function () {
	'use strict';
	;(function ( $, window, document, undefined ) {
		 $.noop();
		 console.log('doing nav stuff');

		 // quick and dirty to make it work in safari >= 6, because it screws up :hover for some reason
		 $('.nav-dropdown').bind('mouseenter mouseleave',function(){ $(this).toggleClass('nav-open'); });

		 /*
		  * TODO:
		  * Impliment search similar to this
		  * http://tympanus.net/codrops/2013/06/26/expanding-search-bar-deconstructed/
		  */

	})( jQuery, window, document );

});