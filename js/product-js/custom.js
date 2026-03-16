$(document).ready(function () {

  function equalizeSlides(slider) {
    var maxHeight = 0;

    slider.find('.slick-slide').css('height', 'auto');

    slider.find('.slick-slide:not(.slick-cloned)').each(function () {
      var h = $(this).outerHeight();
      if (h > maxHeight) {
        maxHeight = h;
      }
    });

    slider.find('.slick-slide').css('height', maxHeight);
  }

  $('.ac-product-skin1, .ac-product-skin2, .ac-product-skin3, .ac-product-skin4, .ac-product-skin5, .ac-product-skin6').on('init setPosition', function () {
    equalizeSlides($(this));
  });

  $('[data-slick]').slick();

});