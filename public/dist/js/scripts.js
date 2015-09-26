'use strict';

'use-strict';

var DRV = window.DRV || {};

DRV.Nav = {
  init: function init() {
    this.listeners();
  },
  listeners: function listeners() {
    $('.burger-container').on('click', function () {
      DRV.Nav.toggleLinks();
    });
  },
  toggleLinks: function toggleLinks() {
    var $body = $('body');

    $body.toggleClass('on');
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
  setDimensions: function setDimensions() {
    var windowX = $(window).width(),
        $cell = $('.client-item');

    if (windowX >= 400) {
      return false;
    }

    $cell.height(windowX);
  }
};

$(document).on('ready', function () {
  DRV.Nav.init();
  DRV.Hero.init();
  DRV.Grid.init();
});