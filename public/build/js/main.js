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
  spinDone: false,
  heroDone: false,
  logoDone: false,
  isMounted: false,
  heroSrc: 'public/dist/img/hollywood.jpg',
  logoSrc: 'public/dist/img/drive-800-307.png',
  preloader: new Image(),
  init() {
    if (window.location.pathname !== '/') { return; }
    this.showSpinner();
    this.loadAsync();
    this.timeOutFallback();
  },
  showSpinner() {
    this.spin = document.getElementById('landing-spinner');
    this.spin.style.visibility = 'visible';
    this.spin.className = 'animated flipInX';
    setTimeout(() => this.onLoaded(this.spin), 1500);
  },
  loadAsync() {
    this.hero = document.getElementById('landing-hero');
    this.logo = document.getElementById('landing-logo');
    this.preloader.src = this.heroSrc;
    this.preloader.addEventListener('load', () => this.onLoaded(this.hero));
    this.logo.addEventListener('load', () => this.onLoaded(this.logo));
    this.logo.src = this.logoSrc;
    this.hero.style.backgroundImage = `url(${this.heroSrc})`;
  },
  onLoaded(el) {
    switch (el) {
      case (this.spin):
        this.spinDone = true;
        break;
      case (this.logo):
        this.logoDone = true;
        break;
      case (this.hero):
        this.heroDone = true;
        break;
    }

    if (this.logoDone && this.heroDone && this.spinDone) {
      return this.render();
    }

  },
  timeOutFallback() {
    if (!this.isMounted) {
      setTimeout(() => this.render, 5000);
    }
  },
  render() {
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
  init() {
    this.setDimensions();

    $(window).on('resize', () => {
      this.setDimensions();
    });
  },
  setDimensions() {
    const mobile = 415;
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
        height = width / 5;
        break;
      case (width >= desktop):
        height = 240;
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