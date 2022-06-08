
 const objowlcarousel = $('.owl-carousel-category');
 if (objowlcarousel.length > 0) {
   objowlcarousel.owlCarousel({
     responsive: {
       0:{
           items:3,
       },
       600:{
           items:4,
       },
       1000: {
         items: 6,
       },
       1200: {
         items: 8,
       },
     },
     loop: true,
     lazyLoad: true,
     autoplay: true,
     dots: false,
     autoplaySpeed: 1000,
     autoplayTimeout: 2000,
     autoplayHoverPause: true,
     nav: true,
     navText:["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
   });
 }

