$(function () {
  "use strict";
  // Adjust Slider Height
  var winH = $(window).height(),
    upperH = $(".upper-nav").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(winH - (upperH + navH));
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffel-images .col-sm").css("opacity", 1);
    } else {
      $(".shuffel-images .col-sm").css("opacity", ".09");
      $($(this).data("class")).css("opacity", 1);
    }
  });
});
