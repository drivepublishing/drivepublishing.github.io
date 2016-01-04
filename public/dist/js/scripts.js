'use strict';

'use-strict';
var DRV = window.DRV || {};

DRV.Menu = {
  body: document.getElementsByTagName('body')[0],
  openClass: 'opened',
  init: function init() {
    var _this = this;

    var $openTrigger = $('.burger .fa-bars');
    var $closeTrigger = $('.burger .fa-times, .menu-item a, .curtain');

    $openTrigger.on('click', function (e) {
      e.preventDefault();
      _this.setNavOpen();
    });

    $closeTrigger.on('click', function (e) {
      _this.setNavClose();
    });

    $(window).on('resize', function () {
      _this.onResizeSetNavClose();
    });
  },
  setNavOpen: function setNavOpen() {
    this.body.className = this.openClass;
  },
  setNavClose: function setNavClose() {
    this.body.className = '';
  },
  onResizeSetNavClose: function onResizeSetNavClose() {
    if ($(window).width() > 800 && this.isOpen()) {
      return this.setNavClose();
    }
  },
  isOpen: function isOpen() {
    return this.body.classList.contains(this.openClass);
  }
};

DRV.HomeLanding = {
  heroReady: false,
  logoReady: false,
  init: function init() {
    if (window.location.pathname !== '/') {
      return;
    }

    this.hero = document.getElementById('site-landing');
    this.logo = document.getElementById('landing-logo');

    return this.loadImages();
  },
  loadImages: function loadImages() {
    var _this2 = this;

    var heroSrc = 'public/dist/img/hollywood.jpg';
    var logoSrc = 'public/dist/img/drive-800-307.png';
    var heroLoader = new Image();

    heroLoader.addEventListener('load', function () {
      return _this2.onLoaded(_this2.hero);
    });
    this.logo.addEventListener('load', function () {
      return _this2.onLoaded(_this2.logo);
    });
    heroLoader.src = heroSrc;
    this.logo.src = logoSrc;
    this.hero.style.backgroundImage = 'url(' + heroSrc + ')';
  },
  onLoaded: function onLoaded(element) {
    if (element === this.logo) {
      this.logoReady = true;
    } else if (element === this.hero) {
      this.heroReady = true;
    }

    if (this.logoReady && this.heroReady) {
      return this.render();
    }
  },
  render: function render() {
    this.logo.style.visibility = 'visible';
    this.hero.style.visibility = 'visible';
    this.logo.className = 'animated fadeInUp';
    this.hero.className = 'animated fadeIn';
  }
};

DRV.ClientsList = {
  init: function init() {
    var _this3 = this;

    this.setDimensions();

    $(window).on('resize', function () {
      _this3.setDimensions();
    });
  },
  setDimensions: function setDimensions() {
    var mobile = 400;
    var tablet = 600;
    var desktop = 1200;
    var width = $(window).width();
    var $items = $('.client-item');

    var height = undefined;
    switch (true) {
      case width < mobile:
        height = width;
        break;
      case width >= mobile && width < tablet:
        height = width / 2;
        break;
      case width >= tablet && width < desktop:
        height = width / 4;
        break;
      case width >= desktop:
        height = 300;
        break;
    }

    return $items.height(height);
  }
};

$(document).on('ready', function () {
  var ClientsList = DRV.ClientsList;
  var Menu = DRV.Menu;
  var HomeLanding = DRV.HomeLanding;

  HomeLanding.init();
  ClientsList.init();
  Menu.init();
});