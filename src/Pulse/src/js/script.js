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

    //Modal
    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                  },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалйста, введите своё имя",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!")
                },
                phone: "Пожалйста, введите свой номер телефона",
                email: {
                  required: "Пожалйста, введите свой e-mail",
                  email: "Введите адрес e-mail в формате name@domain.com"
                }
            }
        });
    };

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name="phone"]').mask("+7 (999) 999-99-99");

});

