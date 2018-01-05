/******************************
  **      1- loader          **
 *****************************/

$(window).on('load', function() { 
    
        $("#loader").fadeOut("slow");
        $("#preloader").delay(500).fadeOut("slow");
    

    $('.navigation__link').on('click',function(){
           $('#navi-toggle').delay(500).prop('checked', false);
           console.log('clicked');
      });   
});  


$(document).ready(function(){
  $(".typed-element").typed({
			strings: ["DEVELOPPEUR FRONT-END", "DEVELOPPEUR WEB","DEVELOPPEUR MOBILE"],
			typeSpeed: 100,
			 backSpeed: 0,

		        backDelay: 500,
		        // loop
		        loop: true
		});


/*************************
            isotop
**************************/
	if ($('.isotope-container').length>0) {
			$(window).load(function() {
				$('.isotope-container').fadeIn();
				var $container = $('.isotope-container').isotope({
					itemSelector: '.grid-item',
					layoutMode: 'masonry',
					transitionDuration: '0.6s',
					filter: "*"
				});
				// filter items on button click
				$('.filters').on( 'click', 'ul.nav li a', function() {
					var filterValue = $(this).attr('data-filter');
					$(".filters").find("li.active").removeClass("active");
					$(this).parent().addClass("active");
					$container.isotope({ filter: filterValue });
					return false;
				});
			});
		}

//jquery validation 
$("form#contact_form").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      name: "required",
      subject: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      msg: "required",
      
    },
    // Specify validation error messages
    messages: {
      name: "SVP Donner un nom valide",
      subject: "SVP Donner un sujet valide",
      email: "SVP Donner une E-mail valide",
      msg: "SVP Donner une message valide"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
     submitHandler: function(form) {
    
    $.ajax({
      url: "//formspree.io/adnen.rebai@gmail.com",
      method: "POST",
      data: $(form).serialize(),
      dataType: "json",
      success: function(data) {
          $("form#contact_form :input").prop("disabled", true);
          console.log('success');
      },
      error: function(){
        console.log('error sending data');
      }
    });
    return false;
  }
  });








});


/*************************\
          scrole reveal
\*************************/
 (function(){

      var config = {
        viewFactor : 0.15,
        duration   : 2000,
        distance   : "5px",
        scale      : 0.8
      };

      window.sr = ScrollReveal( config );

      if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
      }
    })();
           /* block display:hidden in css */
 sr.reveal( ".block", { duration: 2000, reset: true, viewOffset: { top: 54 } } );


/*************************\
        contact form
 \*************************/

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
          scrollTop: target.offset().top
        }, 1000);
      }
    }

    
  });
