/* sur le mobile, force la navigation à se replier après un clic */

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

/* demarre les caroussels */

$(document).ready(function(){
  $('.illustration-carousel').slick({
    autoplay: true,
    arrows: false,
    autoplayspeed: 3000
  });
  $('.design-carousel').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide:true,
    autoplayspeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});
