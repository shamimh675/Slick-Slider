$('.bannerPart').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  autoplaySpeed: 2000,
  arrows: false,
  // prevArrow: '<i class="fa-solid fa-arrow-left-long left-arrow"></i>',
  // nextArrow: '<i class="fa-solid fa-arrow-right-long right-arrow"></i>',
});

  //  Stykey Header  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 200){
        $('.navbar').addClass('sticky-header');
    }
    else {
         $('.navbar').removeClass('sticky-header');
    }
    });  