$('.reviews__wrap').slick({
   infinite: true,
   slidesToShow: 1,
   slidesToScroll:1, 
   waitForAnimate: false,
   asNavFor: '.reviews__list',
 });
 $('.reviews__list').slick({
   infinite: true,
   arrows: false,
   slidesToShow: 7,
   slidesToScroll: 1, 
   waitForAnimate: false,
   centerMode: true,
   focusOnSelect: true,
   asNavFor: '.reviews__wrap',
   responsive: [
      {
         breakpoint: 1366,
         settings: {
           slidesToShow: 7,
           slidesToScroll: 1
         }
       },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1
          
        }
      },
      {
         breakpoint: 480,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 1
           
         }
       },
      
    ]
   
 });




 