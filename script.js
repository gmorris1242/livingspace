var image = $(".image");
var index = 1;
var marker = $(".marker");
var slideShow;
var markerOne = $(".marker-one");
var markerTwo = $(".marker-two");
var markerThree = $(".marker-three");
var markerFour = $(".marker-four");
var openMenu = $("#open-menu");
var closeMenu = $("#close-menu");
var menuContainer = $(".menu-container");
var openContact = $("#open-contact");
var closeContact = $("#close-contact");
var contactContainer = $(".contact-container");

startSlideShow()

function startSlideShow() {
  slideShow = setInterval(function(){
    if(index < 4) {
      image.eq(index-1).fadeOut();
      image.eq(index).fadeIn();
      marker.eq(index-1).removeClass("active");
      marker.eq(index).addClass("active");
      index++
      if(index > 3) {
        index = 0;
      }
    }
  },5000)
};

markerOne.click(function(){
  // index = 1;
  // startSlideShow()
  image.fadeOut();
  image.eq(0).fadeIn();
  marker.removeClass("active");
  markerOne.addClass("active");
});

markerTwo.click(function(){
  clearInterval(slideShow);
  image.fadeOut();
  image.eq(1).fadeIn();
  marker.removeClass("active");
  markerTwo.addClass("active");
});

markerThree.click(function(){
  clearInterval(slideShow);
  image.fadeOut();
  image.eq(2).fadeIn();
  marker.removeClass("active");
  markerThree.addClass("active");
});

markerFour.click(function(){
  clearInterval(slideShow);
  image.fadeOut();
  image.eq(3).fadeIn();
  marker.removeClass("active");
  markerFour.addClass("active");
});

openMenu.click(function(){
  menuContainer.css("top","0").css("opacity",".9");
});

closeMenu.click(function(){
  menuContainer.css("top","-100%").css("opacity","0");
});

openContact.click(function(){
  contactContainer.css("top","0").css("opacity",".9");
  console.log("click");
});

closeContact.click(function(){
  contactContainer.css("top","-100%").css("opacity","0");
});
