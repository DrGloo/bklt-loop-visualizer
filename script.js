$("window").ready(function() {
  var ingredients = ["beans","tomatos","avocado","sour cream","hot sauce"];
  
  $("#memory-box-container-ingredients .memory-box").html(ingredients.join(", "));
  
  function runLoop() {
    $("#console-log").append("The Loop on line 1 is about to start.<br/>");
    for(var i=0; i < ingredients.length; i++) {
      wait();
    }
    $("#console-log").append("The condition has been checked and has evaluated to false<br/>");
  }
  
  function wait() {
    alert("check progress and then click OK to step");
  }
  
});