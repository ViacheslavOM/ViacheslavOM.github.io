//MouseOn hover
$(document).ready(function() {
    $(".popular__games_grid").hover(function(){
        $(this).find(".popular__games_hide").addClass("hover");
    }, function() {
        $(this).find(".popular__games_hide").removeClass("hover");
    });
    $(".new__games_grid").hover(function(){
        $(this).find(".new__games_hide").addClass("hover");
    }, function() {
        $(this).find(".new__games_hide").removeClass("hover");
    });
    $(".recommended__games_grid").hover(function(){
        $(this).find(".recommended__games_hide").addClass("hover");
    }, function() {
        $(this).find(".recommended__games_hide").removeClass("hover");
    });
});

// Slider for banner
$(document).ready(function(){
    $('.banner-logos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});

// Slider for winners
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});