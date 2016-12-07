$(document).ready(function(){


  if(location.hash){
    var hash = location.hash;
    $("body,html").animate({
      scrollTop : $(''+hash).offset().top -100
    },0);
  }

  $("a").click(function(){
    console.log($(this));
    if(this.hash){
      var hash = this.hash.substr(1);
      console.log(hash);
      // var toElement = $("."+hash);
      // console.log(toElement);
      // var toPosition = toElement.offset().top;
      // console.log(toPosition);
      // var pos = $('unId').position().top;
      $("body,html").animate({
        scrollTop : $('#'+hash).offset().top -100
      },2000);
    }
  });

});
