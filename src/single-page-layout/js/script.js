$(window).scroll(function () {
    var scrollTop = $('body').scrollTop();
    var $pot = $('.flower-pot');

    // fixed flower-pot element
    $pot.toggleClass('-begin-pos', scrollTop < 460);
    $pot.toggleClass('-end-pos', 1055 < scrollTop);

    // show leaves
    $('.event-item').each(function (i, a) {
        var base = 500;
        var $date = $(a).find('.date');
        var $desc = $(a).find('.description');

        $date.toggleClass('-show', i * 100 + 500 < scrollTop);
        $desc.toggleClass('-show', i * 100 + 500 < scrollTop);
    });

    // show scroll-top-top button
    $('.scroll-to-top').toggleClass('-show', $('#about').offset().top < scrollTop);
});

// click to scroll
$('.page-navigator > .menu').children().each(function (i, a) {
    $(a).click(function () {
        var idSelector = '#' + $(a).attr('class');
        $('body').animate({
            scrollTop: $(idSelector).offset().top
        }, 500);
    });
});

// scroll-to-top button
$('.scroll-to-top').click(function () {
    $('body').animate({ scrollTop: 0}, 500);
});
