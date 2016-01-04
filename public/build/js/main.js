'use-strict';
const DRV = window.DRV || {};

DRV.Menu = {
  body: document.getElementsByTagName('body')[0],
  openClass: 'opened',
  init() {
    const $openTrigger = $('.burger .fa-bars');
    const $closeTrigger = $('.burger .fa-times, .menu-item a, .curtain');

    $openTrigger.on('click', (e) => {
      e.preventDefault();
      this.setNavOpen();
    });

    $closeTrigger.on('click', (e) => {
      this.setNavClose();
    });

    $(window).on('resize', () => {
      this.onResizeSetNavClose();
    });
  },
  setNavOpen() {
    this.body.className = this.openClass;
  },
  setNavClose() {
    this.body.className = '';
  },
  onResizeSetNavClose() {
    if ($(window).width() > 800 && this.isOpen()) {
      return this.setNavClose();
    }
  },
  isOpen() {
    return this.body.classList.contains(this.openClass);
  },
};

DRV.HomeLanding = {
  heroReady: false,
  logoReady: false,
  init() {
    if (window.location.pathname !== '/') { return; }

    this.hero = document.getElementById('site-landing');
    this.logo = document.getElementById('landing-logo');

    return this.loadImages();
  },
  loadImages() {
    const heroSrc = 'public/dist/img/hollywood.jpg';
    const logoSrc = 'public/dist/img/drive-800-307.png';
    const heroLoader = new Image();

    heroLoader.addEventListener('load', () => this.onLoaded(this.hero));
    this.logo.addEventListener('load', () => this.onLoaded(this.logo));
    heroLoader.src = heroSrc;
    this.logo.src = logoSrc;
    this.hero.style.backgroundImage = `url(${heroSrc})`;
  },
  onLoaded(element) {
    if (element === this.logo) {
      this.logoReady = true;
    } else if (element === this.hero) {
      this.heroReady = true;
    }

    if (this.logoReady && this.heroReady) {
      return this.render();
    }

  },
  render() {
    this.logo.style.visibility = 'visible';
    this.hero.style.visibility = 'visible';
    this.logo.className = 'animated fadeInUp';
    this.hero.className = 'animated fadeIn';
  }
};

DRV.ClientsList = {
  init() {
    this.setDimensions();

    $(window).on('resize', () => {
      this.setDimensions();
    });
  },
  setDimensions() {
    const mobile = 400;
    const tablet = 600;
    const desktop = 1200;
    const width = $(window).width();
    const $items = $('.client-item');

    let height;
    switch (true) {
      case (width < mobile):
        height = width;
        break;
      case (width >= mobile && width < tablet):
        height = width / 2;
        break;
      case (width >= tablet && width < desktop):
        height = width / 4;
        break;
      case (width >= desktop):
        height = 300;
        break;
    }

    return $items.height(height);
  }
};

$(document).on('ready', () => {
  const {ClientsList, Menu, HomeLanding} = DRV;

  HomeLanding.init();
  ClientsList.init();
  Menu.init();
});