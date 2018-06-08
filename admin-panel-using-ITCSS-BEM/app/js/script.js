/* Variables */
var doc = document;
var docEl = document.documentElement;
var $body = $('body');
var $sidebar = $('.c-sidebar');
var $full_screen= $('.u-toggle-fullScreen');
/*===========================================
=            FullScreen utilitie            =
===========================================*/
function toggle_fullScreen() {
    if (!doc.fullscreenElement && !doc.msFullscreenElement && !doc.webkitIsFullScreen && !doc.mozFullScreenElement) {
        if (docEl.requestFullscreen) {
            docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullScreen) {
            docEl.webkitRequestFullscreen();
        } else if (docEl.webkitRequestFullScreen) {
            docEl.webkitRequestFullScreen();
        } else if (docEl.msRequestFullscreen) {
            docEl.msRequestFullscreen();
        } else if (docEl.mozRequestFullScreen) {
            docEl.mozRequestFullScreen();
        }
    } else {
        if (doc.exitFullscreen) {
            doc.exitFullscreen();
        } else if (doc.webkitExitFullscreen) {
            doc.webkitExitFullscreen();
        } else if (doc.webkitCancelFullScreen) {
            doc.webkitCancelFullScreen();
        } else if (doc.msExitFullscreen) {
            doc.msExitFullscreen();
        } else if (doc.mozCancelFullScreen) {
            doc.mozCancelFullScreen();
        }
    }
}
$full_screen.click(function(){
  toggle_fullScreen();
  console.log('requestFullscreen');
})


/*=====  End of FullScreen utilitie  ======*/

 /*******************************
  **      1- loader          **
 *****************************/

$(window).on('load', function() { 
    
      
     $(".preloader").delay(300).fadeOut("slow");
       
      });
$(document).ready(function(){

	// c-sidebar toggle
	
	$('.c-sidebar__toggle').click(function(){
		$(this).toggleClass('c-sidebar__toggle--min');
      $('.wrapper__content').toggleClass('wrapper--min');
      $('.c-sidebar').toggleClass('c-sidebar--min');
      $('.link__text').toggleClass('link--min');
      console.log("clicked");
	});
 // submenu toggle
  $('.c-sidebar__item.has-submenu').click(function(){
  	   $(this).toggleClass('is-open');
  	   $(this).children().toggleClass('show');
  });

  //login example
   //Function to show image before upload

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.login__picture-src').attr('src', e.target.result).fadeIn('slow');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

  $(".picture__input-file").change(function(){
        readURL(this);
    });


// button demonstration
//$('.c-table__cell > .c-button').addClass('button--fullwidth button--round');


/*
**
##############################################################################
pagination
##############################################################################
**
*/

$('.c-pagination__link').click(function(){

  $(this).parent().siblings().children('.c-pagination__link').removeClass('active');
  $(this).addClass('active');

});

/*
**
##############################################################################
input
##############################################################################
**
*/
/*
$('.c-input').focusin(function(){
   $(this).siblings().addClass('is-focused');

});
$('.c-input').focusout(function(){
   $(this).siblings().removeClass('is-focused');

});*/
//var placeholder__text=$('.c-input.has-label').attr('placeholder');

//$('.c-input.has-label').before('<label class="c-input__label">'+placeholder__text+'</label>');

 $('body').find("input[type=text], input[type=password]").each(function(ev)
  {
      if($(this).hasClass('has-label')) { 

         
     
     $(this).before('<label class="c-input__label">'+$(this).attr("placeholder")+'</label>');
        if($(this).val() != "" ){
           $(this).siblings('.c-input__label').addClass('is-focused');
         }

     $(this).focusin(function(){
      $(this).siblings('.c-input__label').addClass('is-focused');
     

      });
      $(this).focusout(function(){
        
         if($(this).val() === "" ){
           $(this).siblings('.c-input__label').removeClass('is-focused');
         }
       });
      }
   });
   
 $('.c-input--success').siblings('.c-input__icon').addClass('u-bg--success');
 $('.c-input--warning').siblings('.c-input__icon').addClass('u-bg--warning');
 $('.c-input--danger').siblings('.c-input__icon').addClass('u-bg--danger');

 $('.c-input--success-inverse').siblings('.c-input__icon').addClass('u-color--success');
 $('.c-input--warning-inverse').siblings('.c-input__icon').addClass('u-color--warning');
 $('.c-input--danger-inverse').siblings('.c-input__icon').addClass('u-color--danger');


// show hide password
 $('.c-input__toggle--pass').click(function(){
        var slash="-slash"
      $(this).children().toggleClass('fa-eye-slash fa-eye');
      var input__pass = $(this).siblings('.c-input');

      if(input__pass.attr('type') == "password"){
         input__pass.attr('type','text');
      }else{
         input__pass.attr('type','password');
        
      }

 });

 /*====================================
 =            section tabs            =
 ====================================*/


$('.c-tabs__link').click(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      var tab_target= $(this).data('target');
      var tab_content=$(this).attr('href');
      tab_content=tab_content.substring(1);
     
      $('#'+tab_target+' #'+tab_content).addClass('active');
      $('#'+tab_target+' #'+tab_content).siblings().removeClass('active');
});
 
 
 /*=====  End of section tabs  ======*/
 /*========================================
 =            Theme customiaer            =
 ========================================*/
 $('.c-field--radio').on('click',function(){
  var bg_color= 'u-bg--'+$(this).data('color');
  //$('.c-sidebar').attr('class','c-sidebar c-sidebar--max ' + bg_color);
  //$('.c-sidebar__toggle').attr('class','c-sidebar__toggle ' + bg_color);

  $('body').attr('class','fluent-theme '+bg_color);

 
 })
 
 
 /*=====  End of Theme customiaer  ======*/
 function togglePanel(){
  var panel_width = $('.c-panel').width();
  $('.c-panel__toggle').on('click',function(){
     $('.c-panel').animate({right:'0'});
  });
   $('.c-panel').on('mouseleave',function(){
       
          $(this).delay(1000).animate({right:-panel_width});
       
   });
 }

togglePanel();

});

 