window.onscroll = function () {
    var pot = document.getElementsByClassName('flower-pot')[0];
    var scrollTop = document.body.scrollTop;

    if (scrollTop < 460) {
        pot.className = 'flower-pot -begin-pos';
    } else if (460 <= scrollTop && scrollTop <= 1055) {
        pot.className = 'flower-pot';
    } else {
        pot.className = 'flower-pot -end-pos';
    }

    var list = document.getElementsByClassName('event-item');
    Array.prototype.forEach.call(list, function (a, i) {
        var base = 500;
        var date = a.getElementsByClassName('date')[0];
        var desc = a.getElementsByClassName('description')[0]

        if (i * 100 + 500 < scrollTop) {
            date.classList.add('-show');
            desc.classList.add('-show');
        } else {
            date.classList.remove('-show');
            desc.classList.remove('-show');
        }
    });
};
