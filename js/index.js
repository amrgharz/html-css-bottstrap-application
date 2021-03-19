$(function () {
  "use strict";
  // Adjust Slider Height
  var winH = $(window).height(),
    upperH = $(".upper-nav").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(winH - (upperH + navH));
});
