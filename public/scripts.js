$(function(){

console.log("scripts is working");

  $("button").on("click", function(){
    console.log("button's working");

// I don't have to fully qualify the full web address because it knows I'm already serving it from here.
    $.get("/balance").done(function(response){
      console.log(response);
      $("div").html(response);
    })
  })

})
