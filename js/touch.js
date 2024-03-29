
var swiper = {

  touchStartX: 0,
  touchEndX: 0,
  minSwipePixels: 100,
  detectionZone: undefined,
  swiperCallback: function() {},

  init: function (detectionZone, callback) {
      swiper.swiperCallback = callback
      detectionZone.addEventListener('touchstart', function (event) {
          swiper.touchStartX = event.changedTouches[0].screenX;
      }, false);
      detectionZone.addEventListener('touchend', function (event) {
          swiper.touchEndX = event.changedTouches[0].screenX;
          swiper.handleSwipeGesture();
      }, false);
  },

  handleSwipeGesture: function () {
      var direction,
          moved
      if (swiper.touchEndX < swiper.touchStartX) {
          moved = swiper.touchStartX - swiper.touchEndX
          direction = "left"
          nextImage();
      }
      if (swiper.touchEndX > swiper.touchStartX) {
          moved = swiper.touchEndX - swiper.touchStartX
          direction = "right"
          previousImage(); 
      }
      if (moved > swiper.minSwipePixels && direction !== "undefined") {
          swiper.swipe(direction, moved)
      }
  },

  swipe: function (direction, movedPixels) {
      var ret = {}
      ret.direction = direction
      ret.movedPixels = movedPixels
      swiper.swiperCallback(ret)
  }
};


var gestureZone = document.querySelector(".showcase__imgContainer");
swiper.init(gestureZone, function(e){});
