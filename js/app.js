// change active menu
const menuLi = document.querySelectorAll(".nav_links");

function setMenuActive() {
  menuLi.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");
}

menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

// Artists Slider
$(document).ready(function () {
    $(".your-class").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 7,
      slidesToScroll: 7,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });
  });
  
// playlist Slider
$(document).ready(function () {
    $(".playlist").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    });
  });

// podcast Slider
$(document).ready(function () {
    $(".podcast").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });

// audio_palyer Slider
$(document).ready(function () {
    $(".audio_palyer").slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
      ],
    });
  });

  // toogle hide menu
  const sidebar = document.querySelector('.sidebar');
  const bars =  document.querySelector('.menu_togle');

  bars.addEventListener('click', () =>{
    sidebar.classList.toggle('active')
  })

  // login
  const loginPopup = document.querySelector('.popup_login');
  const overlay =  document.querySelector('.overlay');
  const login =  document.querySelector('.login');

  login.addEventListener('click', () =>{
    loginPopup.classList.add('active')
    overlay.classList.add('active')
  })
  overlay.addEventListener('click', () =>{
    loginPopup.classList.remove('active')
    overlay.classList.remove('active')
  })