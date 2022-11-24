$(function(){
    let mixer = mixitup('.portfolio__gallery');
    $('.slider__content').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="/images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/images/arrow-right.svg" alt=""></button>',
    });
});