$(document).ready(function () {

  $('#custom_content').insertBefore('.featured');
  $('#pageComponent179414').appendTo('#testimonial_holder');

  $('.footer-content .social').clone().insertAfter('header .sub-nav');

  $('#lwGallery28496 .si-row').on('init', function (event, slick) {

    $('#lwGallery28496 .si-listings-column').each(function () {
      $(this).removeClass('si-listings-column');

    });
  });

  $('#lwGallery28496 .si-row').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /*var checkExist = setInterval(function () {
    if ($('.home-quick-search .search').length) {
      console.log("Exists!");
      $('#hero_content').prependTo('.home-quick-search .search').show();
      clearInterval(checkExist);
    }
  }, 100);*/ // check every 100ms

});

