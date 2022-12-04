$(document).ready(function(){

//     $('.carousel__inner').slick({
//         speed: 1200,
//         adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 900,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });

    const slider = tns({
        container: '.carousel__inner',
        items: 1,
        slideBy: 'page',
        autoplay: false,
        nav: true,
        controls: false,
        responsive: {
            1071: {
                nav: false
            }
        }
        // center: true
        // controlsText: [
        //     '<img src="icons/left.svg">',
        //     '<img src="icons/right.svg">'
        // ]
    });
    document.querySelector('.prev').onclick = function () {
        slider.goTo('prev');
    };
    document.querySelector('.next').onclick = function () {
        slider.goTo('next');
    };

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
        $(this)
            .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_activ').eq($(this).index()).addClass('catalog__content_activ');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_activ');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_activ');
            })
        })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    
});

