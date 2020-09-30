function mobileNav() {
  $("#top-nav").toggleClass("hide");
  $("main").toggleClass("hide");
  $("footer").toggleClass("hide");
  if($("#top-nav").hasClass("hide")) {
    $(".icon-menu").attr("src", "./assets/icon-hamburger.svg");
    $(".header-nav-toggle").attr("aria-label", "Show menu");
  } else {
    $(".icon-menu").attr("src", "./assets/icon-close.svg");
    $(".header-nav-toggle").attr("aria-label", "Hide menu");
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 86 || document.documentElement.scrollTop > 86) {
    $(".site-header").addClass("thin-nav")
  } else {
    $(".site-header").removeClass("thin-nav")
  }
}

window.onscroll = function() {scrollFunction()};
