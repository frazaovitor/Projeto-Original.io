// Carousel destaque

$(document).ready(function () {
  $('.carouselG').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.carouselP'
  });

  $('.carouselP').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.carouselG',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    arrows: true,
    prevArrow: ".nav-cima",
    nextArrow: ".nav-baixo"
  });
});

// Carousel também vistos

$(document).ready(function () {
  $('.carouselOfertas').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".oferta-esq",
    nextArrow: ".oferta-dir"
  });
});










