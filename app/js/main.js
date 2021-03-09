// Home slider
$('.home_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    mouseDrag: false,
    items: 1,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ]
});

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

// Mobile menu filter
$('.filter_btn').on('click', function () {
    $('.menu_mob_filters').addClass('active');
});
$('.filter_close_btn').on('click', function () {
    $('.menu_mob_filters').removeClass('active');
});
// $(document).on('click', function (e) {
//     if (!$(e.target).closest('.main').length) {
//         $('.burger_filter').removeClass('active');
//         $('.menu_mob_filters').removeClass('active');
//         $('body').removeClass('no_scroll');
//     }
//     e.stopPropagation();
// });

// tabs
$('.product_media span').on('click', function () {
    $('.product_media span').removeClass('active');
    $(this).addClass('active');
});
// Dropdown select
$('.dropdown-item').on('click', function(){
    $(this).closest('.d_select').find('.dropdown-toggle').text($(this).text());
});

// Custom nav btns
$('.customNextBtn').click(function() {
    $(this).closest('.custom_slider').find('.owl-carousel').trigger('next.owl.carousel');
});
$('.customPrevBtn').click(function() {
    $(this).closest('.custom_slider').find('.owl-carousel').trigger('prev.owl.carousel');
});

// Sidebar slider
$('.sidebar_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 1
});

// Sidebar single slider
$('.sidebar_single_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    mouseDrag: false,
    items: 1
});

// Products slider
$('.products_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 4,
    responsive : {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        }
    }
});
// categories slider
$('.categories_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 5,
    responsive : {
        0: {
            items: 1
        },
        767: {
            items: 2
        },
        768: {
            items: 3
        },
        992: {
            items: 4
        },
        993: {
            items: 5
        }
    }
})
// Brand Partners
$('.brand_partners').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 5,
    responsive : {
        0: {
            items: 2
        },
        768: {
            items: 5
        }
    }
})
// Products Slider Multiply
$('.products_slider_multiply').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 1
});
// Categories slider
$('.categories_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 5
});
// Brand Partners
$('.brand_partners').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    mouseDrag: false,
    items: 6
});

var countDate = new Date('December 31, 2021 24:00:00').getTime();

function newYear(){
    var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

    if (gap < 0) {
       $('.counter_group').text('promotion ended');
    } else {
        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / second);
        $('.counter_day').text(d);
        $('.counter_hours').text(h);
        $('.counter_minute').text(m);
        $('.counter_second').text(s);
}}

setInterval( function() {
    newYear();
}, 1000)

// Prop view
$('.default_sorting').on('click', function(){
    $('.default_sorting').removeClass('active');
    $(this).addClass('active');
    $('.products_list').removeClass('active');
    if ($(this).hasClass('list')) {
        $('.products_list.list').addClass('active');
    } else {
        $('.products_list.grid').addClass('active');
    }
});

// Color
$('.color').on('click', function(){
    $(this).toggleClass('active');
});

// Product slider
$('.product_slider').sliderPro({
	width: '100%',
	height: 500,
	arrows: true,
	buttons: false,
	waitForLayers: true,
	fade: false,
	autoplay: false,
	autoScaleLayers: false,
	fullScreen: true,
	thumbnailArrows: true,
    imageScaleMode: 'contain',
    thumbnailWidth: 130,
	thumbnailHeight: 130,
	breakpoints: {
		992: {
			height: 500,
		},
		768: {
			height: 300,
		}
	}
});

// Product quantity
$(".ddd").on("click", function () {

    var $button = $(this),
        $input = $button.closest('.sp-quantity').find("input.quntity-input");
    var oldValue = $input.val(),
        newVal;

    if ($.trim($button.text()) == "+") {
        newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below zero
        if (oldValue > 0) {
            newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 0;
        }
    }

    $input.val(newVal);

});

$('.product_field_btn').on('click', function(){
    var prod_qty = parseInt($(this).closest('.product_field').find('.product_field_input').val());

    if (prod_qty >= 0) {
        prod_qty = prod_qty++;
        $(this).closest('.product_field').find('.product_field_input').val(prod_qty);
        console.log(prod_qty);
    } else {
        console.log('remove');
    }
});

// Tooltip
$('[data-toggle="tooltip"]').tooltip();






// Counter
// $("#getting-started")
// .countdown("2020/12/31", function(event) {
//   $('#day').text(
//     event.strftime('%D')
//   );
//   $('#hours').text(
//       event.strftime('%H')
//     );
//     $('#minutes').text(
//       event.strftime('%M')
//     );
//     $('#seconds').text(
//       event.strftime('%S')
//     );
// });
// function getTimeRemaining(endtime) {
//     var t = Date.parse(endtime) - Date.parse(new Date());
//     var seconds = Math.floor((t / 1000) % 60);
//     var minutes = Math.floor((t / 1000 / 60) % 60);
//     var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//     var days = Math.floor(t / (1000 * 60 * 60 * 24));
//     return {
//       'total': t,
//       'days': days,
//       'hours': hours,
//       'minutes': minutes,
//       'seconds': seconds
//     };
//   }

//   function initializeClock(id, endtime) {
//     var clock = document.getElementById(id);
//     var daysSpan = clock.querySelector('.days');
//     var hoursSpan = clock.querySelector('.hours');
//     var minutesSpan = clock.querySelector('.minutes');
//     var secondsSpan = clock.querySelector('.seconds');

//     function updateClock() {
//       var t = getTimeRemaining(endtime);

//       daysSpan.innerHTML = t.days;
//       hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//       minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//       secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//       if (t.total <= 0) {
//         clearInterval(timeinterval);
//       }
//     }

//     updateClock();
//     var timeinterval = setInterval(updateClock, 1000);
//   }

//   var deadline = new Date(Date.parse(new Date()) + 12 * 24 * 60 * 60 * 1000); // for endless timer
//   initializeClock('countdown', deadline);







//TEST 50%
// Set the date we're counting down to
// var countDownDate = new Date("December 31, 2020 24:00:00").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "days " + hours + "hours "
//   + minutes + "minutes " + seconds + "seconds ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);



