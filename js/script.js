$(document).ready(function() {

  $(".menu").click(function() {
    $("body").addClass('noscroll');
    $(".burger-menu").addClass('show');
  });

  $(".close").click(function() {
    $("body").removeClass('noscroll');
    $(".burger-menu").removeClass('show');
  });

}); 