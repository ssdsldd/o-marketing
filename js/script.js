$(function(){
    $('.slider__content').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/images/arrow-right.svg" alt=""></button>',
    });
    $('.header__btn').on('click', function(){
        $('.header__btn').toggleClass("header__btn--active");
        $('.header__list').toggleClass("header__list--active");
        $('.header__logo').toggleClass("header__logo--active");
    });
    let mixer = mixitup('.portfolio__gallery');
});
