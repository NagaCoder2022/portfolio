$(document).ready(function() {
    let $btns = $('.project-area .button-group button');

    $btns.click(function(e) {
        $('.project-area .button-group button').removeClass('active');
        $(this).addClass('active');

        let $selector = $(this).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: $selector
        });
        return false;
    });

    // Initialize Magnific Popup for image links
    $('.project-area .grid').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    //owl-carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        dots:true,
    responsive: {
        0: {
            items:1
        },
        544: {
            items:2
        }
    }
  });
  //sticky navigation menu
  let nav_offset_top = $('.header_area').height() + 50;
  function navbarFixed() {
    if ($('.header_area').length) {
        $(window).scroll(function() {
            let scroll = $(window).scrollTop();
            if (scroll >= nav_offset_top) {
                $('.header_area .main-menu').addClass('navbar_fixed');
            } else {
                $('.header_area .main-menu').removeClass('navbar_fixed');
            }
        });
    }
}
navbarFixed();

});
