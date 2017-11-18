$(document).ready(function(){
  $("body").fireworks();
  for (i=0; i < 6; i++){
    var obj = document.createElement("img")
    obj.src="b1.png"
    $("#ballon").append(obj)
  }
})
