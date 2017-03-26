var pot = document.getElementsByClassName('flower-pot')[0];

window.onscroll = function () {
    var scrollTop = document.body.scrollTop;
    if (scrollTop < 460) {
        pot.className = 'flower-pot -begin-pos';
    } else if (460 <= scrollTop && scrollTop <= 1055) {
        pot.className = 'flower-pot';
    } else {
        pot.className = 'flower-pot -end-pos';
    }
};
