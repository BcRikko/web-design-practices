$(document).ready(function () {
    var $menu = $('.page-navigator > .menu').children();
    var currentIndex = 1;

    $('#paging').onepage_scroll({
        sectionContainer: "section",
        direction: "horizontal",
        pagination: true,
        animationTime: 500,
        loop: false,
        afterMove: function (next) {
            // beforeMoveとafterMoveのindexが同じ値になってしまうのでafterMoveで対応
            $menu.each(function (i, a) {
                $(a).toggleClass('-active', i === next - 1);
            });

            // animateでtransformを操作できないため
            $('#next').css('transform', function () {
                if ($menu.length === next) {
                    return 'rotate(180deg)';
                } else {
                    return 'rotate(0)';
                }
            });
            currentIndex = next;
        },
    });

    $menu.each(function (i, a) {
        $(a).click(function () {
            $('#paging').moveTo(i + 1);
        });
    });

    $('#next').click(function () {
        var index = (currentIndex + 1) % ($menu.length + 1);
        $('#paging').moveTo(index === 0 ? 1 : index);
    });
});
