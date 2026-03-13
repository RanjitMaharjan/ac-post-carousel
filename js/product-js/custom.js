$(document).ready(function(){

function equalizeSlides(){
    var maxHeight = 0;

    $('.ac-product-skin5 .slick-slide').css('height','auto');

    $('.ac-product-skin5 .slick-slide:not(.slick-cloned)').each(function(){
        var h = $(this).outerHeight();
        if(h > maxHeight){
            maxHeight = h;
        }
    });

    $('.ac-product-skin5 .slick-slide').css('height', maxHeight);
}

$('.ac-product-skin5').on('init setPosition', function(){
    equalizeSlides();
});

$('[data-slick]').slick();

});