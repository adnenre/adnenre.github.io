'use strict';



var background ={
                 // 'gradient' , 'image' , 'slideShow'
       type   : 'gradient',

         //'bg-color-one','bg-color-two','bg-color-three','bg-color-four'
      
       gradient  : 'bg-color-one',


        // choose ture to activate background image with the url image_url 
       
        //  or let it to false to have gradient color
       slideShow :{ 

             slides    :

                [
                  { src: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                  { src: 'https://images.pexels.com/photos/147504/pexels-photo-147504.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                  { src: 'https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                  { src: 'https://images.pexels.com/photos/196464/pexels-photo-196464.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                  { src: 'https://images.pexels.com/photos/71104/utah-mountain-biking-bike-biking-71104.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' },
                  { src: 'https://images.pexels.com/photos/69731/pexels-photo-69731.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' }

                ],
                overlay:'assets/css/overlays/06.png'

             },

        image : {

          image_url : "https://images.pexels.com/photos/4827/nature-forest-trees-fog.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"

        },
       
      
       particule : true

      } ;




/**************************
 **		countDwon      **   
 **************************/

var counter = {
        

        // "counter-one", "counter-two","counter-three","counter-four"

		style : 'counter-one',


		
    launchDate : {


          // OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
          Month: 'May',


          //  DAY : INTEGER[ 1 - 31 ]

          Day: 25,

           // SET YEAR : INTEGER

          Year: 2018
    }
		
	};

/**************************
 **		Ajax Chimp       **   
 **************************/

$("#subscribe_form").ajaxChimp({


	// Replace your mailchimp post url inside double quote "".
    
    url: "//novisdev.us15.list-manage.com/subscribe/post?u=202b79afea96f1d57561896f5&amp;id=02ba748be1"    
 
  });


















