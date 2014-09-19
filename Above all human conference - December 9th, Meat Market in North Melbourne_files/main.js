
window.scrollReveal = new scrollReveal();

// makes sure the whole site is loaded
/*
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
})
*/

function getWidth() {
    width = $( window ).width();
    height = $( window ).height();

    if ( width >= 768 && width < 1024 ){
        
        $('.s-excerpt').each(function(){
            str = $(this).text();
            str = str.substr(0,30);
            $(this).text(str);  
        });

        /** Menu **/
        $('.navbar-nav li').css({ 'margin-right': '-4px' });
        /** Schedule Fixes on 768px **/
        $('.schedule-keyboard').css({ height: 220, bottom:74 });
        /** Contact Fixes **/
        $('.contact .contact-ntitle').css({ padding: '25px 0 0' });
        $('.contact .contact-newsletter').css({ margin: '25px auto -29px' });
    } 
	if ( width >= 480 && width < 768 ){
        $('.s-excerpt').each(function(){
            str = $(this).text();
            str = str.substr(0,10) + '...';
            $(this).text(str);  
        });
    }        
    
   if ( width <= 480 ){
        $('.s-excerpt').each(function(){
            str = $(this).text();
            str = str.substr(0,100) ;
            $(this).text(str);  
        });
    }        
}

/* =================================
===  Bootstrap Fix              ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/*=================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll',function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });   


$(window).resize(function(){
    /** Resposive override/fixes **/
    getWidth();             
});

/* ================================
===  PARALLAX                  ====
================================= */
jQuery(document).ready(function($){
    /*  
    if ($.browser.msie && $.browser.version == 10) {
        $("html").addClass("ie10");
    } 
    */
    
    if (navigator.userAgent.match(/msie/i) || navigator.userAgent.match(/trident/i) ){
        $("html").addClass("ie10");
    }
    
    /** Resposive override/fixes **/
    getWidth();             
    
/* =================================
===  STICKY NAV                 ====
=================================== */

  $('.main-nav-list').onePageNav({
    scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
    scrollOffset: 0 //Height of Navigation Bar
  });
  
  // Sticky Header - http://jqueryfordesigners.com/fixed-floating-elements/         
  var top = $('#main-nav').offset().top - parseFloat($('#main-nav').css('margin-top').replace(/auto/, 0));
  
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      //$('#main-nav').addClass('fixed');
    } else {
      // otherwise remove it
      //$('#main-nav').removeClass('fixed');       
    }
  });
  

/*=================================
===  SPEAKERS HOVER            ====
=================================== */
    $('.box-shadow').on('click', function(){
        _this = $(this);
        if ( $(this).hasClass('active') ){
            $(this).removeClass('active');
            /*$(this).find('.box').fadeTo(200, 0,function(){
                $(this).removeClass('hover');
            });*/
            $(this).find('.box').fadeTo(200, 0, function(){
                $(this).css({'z-index':9})
                $('.box-overlay').fadeTo(200,0, function(){
                   $(this).remove(); 
                });    
            });
            
        }else{
            $(this).addClass('active');
            //$(this).find('.box').addClass('hover').fadeTo(500, 1);            
            $('.speaker').append('<div class="box-overlay"></div>');
            $('.box-overlay').css({ height: $(document).height() }).fadeTo(500,1, function(){
                _this.find('.box').fadeTo(500, 1, function(){ $(this).css({'z-index':9999999}) });
            });             
        }               
    }); 
    
    $(document).on('click','.box-overlay', function(){
        $(this).fadeTo(200,0,function(){
            $('.box-shadow.active').find('.box').fadeTo(500, 0, function(){
                $(this).css({'z-index':9});
                $('.box-shadow.active').removeClass('active');
            });
            $(this).remove();
        })
    })      
    
/*=================================
===  SCHEDULE HOVER            ====
=================================== */    
    
    $('.schedule-ul li p').each(function(){
        /** Hover Effect
        $(this).hover(function(){
            $(this).parent().find('.s-content').css({width: $(this).width()-156}).slideDown(500);        
        }, function(){
            $(this).parent().find('.s-content').slideUp(400);
        });
        **/
        
        /** Click Effect **/
        $(this).on('click', function(){
            if ( $(this).hasClass('active') ){
                $(this).parent().find('.s-content').slideUp(500, 'linear', function(){
                     $(this).parent().find('p').removeClass('active');
                });
            }else{
                $('.schedule-ul li p.active').removeClass('active').parent().find('.s-content').slideUp(500, 'linear');
                $(this).parent().find('.s-content').css({width: $(this).width()}).slideDown(500, 'swing', function(){
                     $(this).parent().find('p').addClass('active');
                });   
            }                    
        });
                        
    });
    
/*=================================
===  PARALLAX                  ====
=================================== */    
    
    // $('.visual-main').animate({'background-position-y':250},'slow');
    $('section[data-type="background"]').each(function(){
        //$(this).parallax("50%", .05);  
    });     
  
    var $window = $(window);    
    var $clouds = $('.main-clouds');
    var $device = $('.main-device');
    var $road = $('.main-road');
    var $islandL = $('.island-left');
    var $islandR = $('.island-right');
    var $island3 = $('.main-island-3');
    var $island2 = $('.main-island-2');
    var $island1 = $('.main-island-1');
    var ncnt=0;
    
    $island1.parallax("50%", .85);
    //$island2.parallax("50%", .5);
    $islandL.parallax("10%", .55)
    $islandR.parallax("90%", .3)
    
    /*
    _ht = $('.container-content').height();
    var backgroundPos = $islandR.css('backgroundPosition').split(" ");        
    var xPos = backgroundPos[0],
        yPos = backgroundPos[1];
    */
    
    $(window).scroll(function() {

      scrollMain = ($window.scrollTop()/2);
      /* 
      var yCPos = ($window.scrollTop()/10); 
      yCPos = (yCPos/100);     
      //if ( yCPos >= 55 ){                   
          $islandR.css({ backgroundPosition: '90% ' + (-yCPos) + '%' });      
      //}
      */ 
      if ( scrollMain >= 100 && scrollMain <= 520 ){       
        //$('.container-content').animate({ height: scrollMain }, 80, 'swing');
      }
        
      //Device
      var dPos = ($window.scrollTop() / 8 );
      if ( dPos <= 20 ){
          var coords = '50% '+ dPos + 'px';
          $device.css({ backgroundPosition: coords });  
      }
      
      //Road
      var rPos = -($window.scrollTop() / 10 );
      if ( rPos >= -40 ){
          var coords = '50% '+ rPos + 'px';
          $road.css({ backgroundPosition: coords });  
      }              
        
      //Clouds  
      var cPos = ($window.scrollTop() / 15 );
      if ( cPos <= 70 ){
          var coords = '50% '+ cPos + 'px';
          $clouds.css({ backgroundPosition: coords });                 
      }

      //Island2
      var vPos = -($window.scrollTop() / 1.4 );
      var coords = '50% '+ vPos + 'px';
      $island2.css({ backgroundPosition: coords });       
      
      var mPos = ($window.scrollTop() / 2 );                 
      if ( mPos > 430  ){
         var pcoords = '0 '+ ncnt + '%';            
         $('#main-content').css({ backgroundPosition: pcoords });
         ncnt++;
      }else if ( mPos > 430 && mPos < 1000 ){
         var pcoords = '0 '+ ncnt + '%';            
         $('#main-content').css({ backgroundPosition: pcoords });
         ncnt--;
      }else if ( mPos < 450 ){
         var pcoords = '0 0';            
         $('#main-content').css({ backgroundPosition: pcoords });
         ncnt = 0;
      }
      
        
      //Island 3  
      var tPos = -($window.scrollTop() / 40 );
      if ( tPos <= 20 ){
          var coords = '50% '+ tPos + 'px';
          $island3.css({ backgroundPosition: coords });   
      }
      
    });
  
});//End of Document

/*=================================
===  EXTERNAL LINKS            ====
=================================== */    
// Load external links (the click event is being overwritten)
$("a.external-link").on('click', function(){
	var href = $(this).attr('href');
	document.location.href(href)
});
