$(document).ready(function(){
  setTimeout(
  function()
  {
    $(".loader").remove();
    $(".main-content").show();
  }, 2000);
  $("#about").click(function(e){
    $("html").animate({
        scrollTop: $("html").offset().top
    }, 1000);
  })
  $("#model").click(function(e){
    $("html").animate({
        scrollTop: $(".page-wrapper").offset().top
    }, 1000);
  })
  $("#disciplines").click(function(e){
    $("html").animate({
        scrollTop: $(".decoy-hack").offset().top
    }, 1000);
  });
  $("#contact").click(function(e){
    $("html").animate({
        scrollTop: $(".contact-footer").offset().top
    }, 1000);
  })
});
