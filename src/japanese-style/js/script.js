$(document).ready(function () {
    $('#paging').onepage_scroll({
        sectionContainer: "section",
        direction: "horizontal",
        pagination: true,
        animationTime: 500,
        loop: false,
        afterMove: function (next) {
            // beforeMoveとafterMoveのindexが同じ値になってしまうのでafterMoveで対応
            $('.page-navigator > .menu').children().each(function (i, a) {
                $(a).toggleClass('-active', i === next - 1);
            });
        }
    });

    $('.page-navigator > .menu').children().each(function (i, a) {
        $(a).click(function () {
            $('#paging').moveTo(i + 1);
        });
    });
});
