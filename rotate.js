function rotatefront(){
    var angle = ($('.front').data('angle') + 15) || 15;
    $('.front').css({'transform': 'rotate(' + angle + 'deg)'});
    $('.front').data('angle', angle);
}

function rotatefront2(){
    var angle = ($('.front').data('angle') + -15) || -15;
    $('.front').css({'transform': 'rotate(' + angle + 'deg)'});
    $('.front').data('angle', angle);
}



$(document).ready(function(){
    $("#cover").addClass("loaed");
});

var windowWidth = $(window).width();
var windowHeight = $(window).height();

for (var i = 0; i < 1000; i++){
      var toLeft = Math.round(Math.random()*windowWidth);
      var toTop = Math.round((Math.random()*windowHeight)/2);

      $("<div/>")
      .addClass("star-sm")
      .attr("style","top:"+toTop+"px;left:"+toLeft+"px;")
      .appendTo("#upper")

      if (i%5==0) {
            $("<div/>")
            .addClass("star-md")
            .attr("style","top:"+toTop+"px;left:"+toLeft+"px;")
            .appendTo("#upper");
      }else if (i%25==0) {
            $("<div/>")
            .addClass("star-lg")
            .attr("style","top:"+toTop+"px;left:"+toLeft+"px;")
            .appendTo("#upper");

      }
}

for (var i = 0; i <500; i++) {
      var toLeft = Math.round(Math.random()*windowWidth);
      var toTop = Math.round((Math.random()*windowHeight)/2);

      $("<div/>")
      .addClass("star-sm")
      .attr("style","top:"+toTop+"px;left:"+toLeft+"px;")
      .appendTo("#lower")

      if (i%5==0) {
            $("<div/>")
            .addClass("star-md")
            .attr("style","top:"+toTop+"px;left:"+toLeft+"px;")
            .appendTo("#lower");
      }else if (i%25==0) {
            $("<div/>")
            .addClass("star-lg")
            .attr("style","top:"+toTop+"px;left:"+toLeft+"px;")
            .appendTo("#lower");

      }
}
