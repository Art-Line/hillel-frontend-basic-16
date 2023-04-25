

$('.js-reviews-slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    // arrows: false,
    prevArrow: '<button type="button" class="reviews__arrow reviews__arrow_prev" arial-label="arrow prev"></button>',
    nextArrow: '<button type="button" class="reviews__arrow reviews__arrow_next" arial-label="arrow next"></button>',
    dots: true,
    dotsClass: 'reviews__dots',
    draggable: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                draggable: true,
                arrows: false,
            }
        }, 
    ]
  });


