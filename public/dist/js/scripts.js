'use strict';

'use-strict';

var DRV = window.DRV || {};

DRV.Nav = {
  init: function init() {
    this.listeners();
  },
  listeners: function listeners() {
    $('.burger-container').on('click', function (e) {
      // DRV.Nav.animateNav(e);
      DRV.Nav.toggleLinks();
    });

    $('.nav-link a, .curtain').on('click', function () {
      $('body').removeClass('on');
    });
  },
  toggleLinks: function toggleLinks() {
    var $body = $('body');

    $body.toggleClass('on');
  },
  animateNav: function animateNav(e) {
    var $body = $('body');

    if ($body.hasClass('on')) {
      $('.nav-links').removeClass('slideInDown');
      $('.nav-links').addClass('slideOutUp');
    } else {
      $('.nav-links').removeClass('slideOutUp');
      $('.nav-links').addClass('slideInDown');
    }
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