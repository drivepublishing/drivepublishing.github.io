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
  spinDone: false,
  heroDone: false,
  logoDone: false,
  isMounted: false,
  heroSrc: 'public/dist/img/hollywood.jpg',
  logoSrc: 'public/dist/img/drive-800-307.png',
  preloader: new Image(),
  init: function init() {
    if (window.location.pathname !== '/') {
      return;
    }
    this.showSpinner();
    this.loadAsync();
    this.timeOutFallback();
  },
  showSpinner: function showSpinner() {
    var _this2 = this;

    this.spin = document.getElementById('landing-spinner');
    this.spin.style.visibility = 'visible';
    this.spin.className = 'animated flipInX';
    setTimeout(function () {
      return _this2.onLoaded(_this2.spin);
    }, 1500);
  },
  loadAsync: function loadAsync() {
    var _this3 = this;

    this.hero = document.getElementById('landing-hero');
    this.logo = document.getElementById('landing-logo');
    this.preloader.src = this.heroSrc;
    this.preloader.addEventListener('load', function () {
      return _this3.onLoaded(_this3.hero);
    });
    this.logo.addEventListener('load', function () {
      return _this3.onLoaded(_this3.logo);
    });
    this.logo.src = this.logoSrc;
    this.hero.style.backgroundImage = 'url(' + this.heroSrc + ')';
  },
  onLoaded: function onLoaded(el) {
    switch (el) {
      case this.spin:
        this.spinDone = true;
        break;
      case this.logo:
        this.logoDone = true;
        break;
      case this.hero:
        this.heroDone = true;
        break;
    }

    if (this.logoDone && this.heroDone && this.spinDone) {
      return this.render();
    }
  },
  timeOutFallback: function timeOutFallback() {
    var _this4 = this;

    if (!this.isMounted) {
      setTimeout(function () {
        return _this4.render;
      }, 5000);
    }
  },
  render: function render() {
    this.spin.className = '';
    this.spin.className = 'animated fadeOut';
    this.logo.style.visibility = 'visible';
    this.hero.style.visibility = 'visible';
    this.logo.className = 'animated fadeInUp';
    this.hero.className = 'animated fadeIn';
    this.isMounted = true;
  }
};

DRV.ClientsList = {
  init: function init() {
    var _this5 = this;

    this.setDimensions();

    $(window).on('resize', function () {
      _this5.setDimensions();
    });
  },
  setDimensions: function setDimensions() {
    var mobile = 415;
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
        height = width / 5;
        break;
      case width >= desktop:
        height = 240;
        break;
    }

    return $items.height(height);
  }
};

$(document).on('ready', function () {
  var ClientsList = DRV.ClientsList;
  var Menu = DRV.Menu;
  var HomeLanding = DRV.HomeLanding;

  $('.cr').text('Copyright ' + new Date().getFullYear() + ' © Drive Music Publishing | All Rights Reserved');
  HomeLanding.init();
  ClientsList.init();
  Menu.init();
});