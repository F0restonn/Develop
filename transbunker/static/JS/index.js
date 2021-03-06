[].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function(el){
    el.addEventListener('click', onClick, false);
});

function onClick(e){
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el){
    el.classList.add('show-submenu');
    document.addEventListener('click', function onDocClick(e){
        e.preventDefault();
        if(el.contains(e.target)){
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el){
    el.classList.remove('show-submenu');
}

$(window).ready(function(){
    let wHeight =$(window).height();

    $('.header_row')
    .height(wHeight)
    .scollie({
        scrollOffset:-50,
        scrollingInView:function(elem){
            let bgColor = elem.data('background');

            $('header_row').css('background-color',black);
        }
    });
});



// "use strict";

// let c = 45;

// function draw() {
//   document.documentElement.style.setProperty('--direction', c++ + 'deg');
//   requestAnimationFrame(draw);
// }

// requestAnimationFrame(draw);