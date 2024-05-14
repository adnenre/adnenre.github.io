"use strict";

var background = {
  // 'gradient' , 'image' , 'slideShow'
  type: "gradient",

  //'bg-color-one','bg-color-two','bg-color-three','bg-color-four'

  gradient: "bg-color-three",

  // choose ture to activate background image with the url image_url

  //  or let it to false to have gradient color
  slideShow: {
    slides: [
      {
        src: "https://raw.githubusercontent.com/adnenre/adnenre.github.io/master/soon-demo/img/img-5.jpeg",
      },
      {
        src: "https://raw.githubusercontent.com/adnenre/adnenre.github.io/master/soon-demo/img/img-4.jpeg",
      },
      {
        src: "https://raw.githubusercontent.com/adnenre/adnenre.github.io/master/soon-demo/img/img-1.jpeg",
      },
      {
        src: "https://raw.githubusercontent.com/adnenre/adnenre.github.io/master/soon-demo/img/img-2.jpeg",
      },
      {
        src: "https://raw.githubusercontent.com/adnenre/adnenre.github.io/master/soon-demo/img/img-3.jpeg",
      },
      {
        src: "https://raw.githubusercontent.com/adnenre/adnenre.github.io/master/soon-demo/img/img-6.jpeg",
      },
    ],
    overlay: "assets/css/overlays/06.png",
  },

  image: {
    image_url:
      "https://raw.githubusercontent.com/adnenre/adnenre.github.io/master/soon-demo/img/img-2.jpeg",
  },

  particule: true,
};

/**************************
 **		countDwon      **
 **************************/

var counter = {
  // "counter-one", "counter-two","counter-three","counter-four"

  style: "counter-three",

  launchDate: {
    // OPTIONS:"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    Month: "May",

    //  DAY : INTEGER[ 1 - 31 ]

    Day: 25,

    // SET YEAR : INTEGER

    Year: 2024,
  },
};

/**************************
 **		Ajax Chimp       **
 **************************/

$("#subscribe_form").ajaxChimp({
  // Replace your mailchimp post url inside double quote "".

  url: "//novisdev.us15.list-manage.com/subscribe/post?u=202b79afea96f1d57561896f5&amp;id=02ba748be1",
});
