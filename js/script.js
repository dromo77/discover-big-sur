/* Toggle Menu Icon Mobile */

    $(".navbar_toggle").click(function() {
    $(this).find("i").toggleClass("fas fa-times fas fa-bars");
});

$(document).ready(function(){
    $(".navbar_toggle").click(function(){
        $(".nav").toggle();
    });
});

/* Carousel */

$(document).on('ready', function() {
    $(".regular").slick({
            dots: false,
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        centerMode: false,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });







    
   





