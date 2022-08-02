$('.reviews__wrap').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
  asNavFor: '.reviews__list',
});

$('.reviews__list').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  waitForAnimate: false,
  focusOnSelect: true,
  asNavFor: '.reviews__wrap',
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: false,
      },
    },
  ],
});
