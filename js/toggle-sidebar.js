function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


var header = document.querySelector('.header');
var headerLogo = document.querySelector('.header__logo');
document.onscroll = function() {

  if (window.scrollY > 0 && !header.classList.contains('header-scroll')) {
    header.classList.add('header-scroll');
    headerLogo.classList.add('header__logo-scroll');
  }

  if (window.scrollY <= 0 && header.classList.contains('header-scroll')) {
    header.classList.remove('header-scroll');
    headerLogo.classList.remove('header__logo-scroll');
  }
 
};

/*
var avatarElem = document.getElementById('header');
var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

    window.onscroll = function() {
      if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
        avatarElem.style.background="transparent";
      } else if (window.pageYOffset > avatarSourceBottom) {
        avatarElem.style.background="gray";
      }
    };

    */