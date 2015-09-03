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
    autoplaySpeed: 6000
  });
  $('.design-carousel').slick({
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide:true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
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

  /* smooth scroll */
  $('nav a').click( function() { // Au clic sur un élément
    var page = $(this).attr('href'); // Page cible
    var speed = 750; // Durée de l'animation (en ms)
    $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
    return false;
  });
});
