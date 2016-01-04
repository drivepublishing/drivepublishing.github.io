'use strict';

'use-strict';
var DRV = window.DRV || {};

DRV.Nav = {
  $body: $('body'),
  openClass: 'opened',
  init: function init() {
    var _this = this;

    var $openTrigger = $('.burger .fa-bars');
    var $closeTrigger = $('.burger .fa-times, .opened .site-menu a, .opened .curtain');

    $openTrigger.on('click', function (e) {
      e.preventDefault();
      _this.setNavOpen();
    });

    $closeTrigger.on('click', function (e) {
      e.preventDefault();
      _this.setNavClose();
    });

    $(window).on('resize', function () {
      _this.onResizeSetNavClose();
    });
  },
  setNavOpen: function setNavOpen() {
    this.$body.addClass(this.openClass);
  },
  setNavClose: function setNavClose() {
    this.$body.removeClass(this.openClass);
  },
  onResizeSetNavClose: function onResizeSetNavClose() {
    if ($(window).width() > 900 && this.isOpen()) {
      return this.setNavClose();
    }
  },
  isOpen: function isOpen() {
    return this.$body.hasClass(this.openClass);
  }
};

DRV.Hero = {
  init: function init() {
    this.loadImage();
  },
  loadImage: function loadImage() {
    var $hero = $('.hero'),
        src = 'public/dist/img/hollywood.jpg',
        img = new Image(),
        callback = function callback() {
      DRV.Hero.triggerAnimation();
    };

    img.addEventListener('load', callback);
    img.src = src;
    $hero.css({ 'background-image': 'url(\'' + src + '\')' });
  },
  triggerAnimation: function triggerAnimation() {
    var $image = $('.img-overlay'),
        $hero = $('.hero');

    $hero.css({ 'visibility': 'visible' });
    $hero.addClass('fadeIn');
    $image.css({ 'display': 'inline-block' });
  }
};

DRV.Grid = {
  init: function init() {
    this.setDimensions();
  },
  onResize: function onResize() {
    this.setDimensions();
  },
  setDimensions: function setDimensions() {
    var windowX = $(window).width(),
        $cells = $('.client-item');

    if (windowX < 400) {
      $cells.height(windowX);
    } else if (windowX >= 400 && windowX < 600) {
      $cells.height(windowX / 2);
    } else if (windowX >= 600 && windowX < 1200) {
      $cells.height(windowX / 4);
    } else if (windowX >= 1200) {
      $cells.height(300);
    }
  }
};

$(document).on('ready', function () {
  DRV.Nav.init();
  DRV.Hero.init();
  DRV.Grid.init();
});

$(window).resize(function () {
  DRV.Grid.init();
});