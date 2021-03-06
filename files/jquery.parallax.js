/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
var show_div = 0;
(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});

	$.fn.parallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$('.section-bg').each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
            req_len =    $('#main-content').offset().top + 40;
				// Check if totally above or totally below viewport
				if (top + height < req_len ) {
				
					return;
				}
				
				$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
})(jQuery);

/*$(window).on('scroll',function(){
//main-bg section-bg	

	var pos = $(window).scrollTop();				

			$('.main-bg').each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = $element.height();
            req_len =    $('#main-content').offset().top + 40;
				// Check if totally above or totally below viewport
				if (top > req_len ) {
					if(show_div==0){
					$('.main-bg').css('display','none');
					$('.section-bg').css('display','none');
					show_div = 1;
					}
					return;
				}
				
				if(show_div==1){
					$('.section-bg').css('display','block');
					$('.main-bg').css('display','block');
					show_div = 0;
					}
						
				//$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
			});
});*/