$(document).ready(function(){

   // jQuery methods go here...

   // Hamburger Bar

  $(".hamburger").click(function(){

  $(this).toggleClass('active');
  $(".mobile-nav").fadeToggle();

});

});
