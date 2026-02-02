$(document).ready(function () {

    //  Initialize slick sliders
    $('[data-slick]').slick();

    //  Add separator spans between category <li> items
    $(".ac-post-catagory ul").each(function () {
        const $items = $(this).find("li");
        if ($items.length > 1) {
            $items.each(function (index) {
                if (index < $items.length - 1) {
                    $('<span class="ac-cat-separator"> & </span>').insertAfter(this);
                }
            });
        }
    });

    //  Add <span> inside each <div> of .ac-post-meta if more than 1 div
    $(".ac-post-meta").each(function () {
        const $divs = $(this).children("div");
        if ($divs.length > 1) {
            $divs.each(function (index) {
              if (index < $divs.length -1){
                $('<span class="ac-meta-separator"> / </span>').insertAfter(this);
              }
            });
        }
    });

});
