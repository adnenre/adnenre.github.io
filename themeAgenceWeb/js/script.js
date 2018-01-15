
$(window).on('load', function() {  
$(".preloader").delay(100).fadeOut("slow"); 
});

$('document').ready(function(){
        
   // navbar active button
   $('.nav-link').on('click',function(){
   	$(this).addClass('isActive');
   	$(this).parent().siblings().children('.nav-link').removeClass('isActive');
   	
   });




var el = $('.navbar');
var body = $('body');
var el_height = el.height();
el.hasClass('fixed-top')?body.css('margin-top','el_height'):body.css('margin-top','0');
/*************************\
        smooth scrolle
 \*************************/
 //scroll

 
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    var value ;
    $('.navbar').hasClass('fixed-top')?value=$('.navbar').height():value =0;
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top-value
        }, 1000);
      }
    }

    
  });

  
});

