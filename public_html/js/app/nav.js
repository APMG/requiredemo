define(["jquery"], function newsnav() {
	'use strict';
	return {
		topEl: $('#nav-top'),
		closeEl: $('#nav-top-opener'),

		init : function(){
			console.log('doing nav stuff yeah yeah yeah');

			// quick and dirty to make it work in safari >= 6, because it screws up :hover for some reason
			//$('.nav-dropdown').bind('mouseenter mouseleave',function(){ $(this).toggleClass('nav-open'); });


			//this is very hacktacular right now 
			// only 
			if (Modernizr.touch){
				this.topEl.bind('touchstart',function(e){
					var self = this;
					console.log('touch started');
					console.log($(self));
					$(self).addClass('nav-open');
					e.preventDefault();
				});

				$('#nav-top-opener').bind('touchstart', function(e){
					console.log('MEMEME',this);
					if ($(this).parent().hasClass('nav-open')){
						$(this).parent().removeClass('nav-open');
						e.stopPropagation();
						e.preventDefault();
					}

				});
			}
		},

		
	};

});


 /*
  * TODO:
  * Impliment search similar to this
  * http://tympanus.net/codrops/2013/06/26/expanding-search-bar-deconstructed/
  */