/*-------------map------------------*/ 

 'use strict';

        var link = document.querySelector('.map');
        var popup = document.querySelector('.ya-map');
        var close = popup.querySelector('.ya-map__close');
        var overlay = document.querySelector('.popup-map');


        link.addEventListener('click', function(event) {
            event.preventDefault();
            popup.classList.add('modal-content__show');
            overlay.classList.add('modal-content__overlay-show');
        });

        close.addEventListener('click', function(event) {
            event.preventDefault();
            popup.classList.remove('modal-content__show');
            overlay.classList.remove('modal-content__overlay-show');
        });


        window.addEventListener('keydown', function(event) {
            if (event.keyCode === 27) {
                if (popup.classList.contains('modal-content__show')) {
                popup.classList.remove('modal-content__show');
                overlay.classList.remove('modal-content__overlay-show');
                }
            }
        })
