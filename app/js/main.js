// Mobile menu
$('.burger').on('click', function () {
    $('.burger').toggleClass('active');
    $('body').toggleClass('no_scroll');
    $('.menu_mob').toggleClass('active');
});
$(document).on('click', function (e) {
    if (!$(e.target).closest('.header').length) {
        $('.burger').removeClass('active');
        $('.menu_mob').removeClass('active');
        $('body').removeClass('no_scroll');
    }
    e.stopPropagation();
});
// main slider
$('.main_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    mouseDrag: false,
    items: 1,
    // navText: [
    //     '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    //     '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    // ]
});



// tabs
$('.product_media span').on('click', function () {
    $('.product_media span').removeClass('active');
    $(this).addClass('active');
});
