var image = $(".image");
var index = 1;
var marker = $(".marker");

// startSlideShow()

function startSlideShow() {
  setInterval(function(){
    if(index < 4) {
      console.log(index);
      image.eq(index-1).fadeOut();
      image.eq(index).fadeIn();
      index++
      if(index > 3) {
        index = 0;
      }
    }
  },2000)
}
