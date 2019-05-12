$(document).ready(function(){
    $("[data-tab]").click(function(){
    $(this).attr("status", "active")
    .siblings().attr("status", "inactive");
    $tab = $(this).attr("data-tab");
    $("[tab]").each(function(){
     if ($(this).attr("tab") === $tab) {
      $(this).attr("status", "active")
      .siblings().attr("status", "inactive");
     }
    });
   });
   $("form").submit(function(e){
     e.preventDefault();
   });
   alert("this is my profile");
  });