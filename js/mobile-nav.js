function mobileNav() {
  $("#top-nav").toggleClass("hide");
  $("main").toggleClass("hide");
  $("footer").toggleClass("hide");
  if($("#top-nav").hasClass("hide")) {
    $(".icon-menu").attr("src", "./assets/icon-hamburger.svg");
  } else {
    $(".icon-menu").attr("src", "./assets/icon-close.svg");
  }
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 86 || document.documentElement.scrollTop > 86) {
    $(".site-header").addClass("thin-nav")
  } else {
    $(".site-header").removeClass("thin-nav")
  }
}
