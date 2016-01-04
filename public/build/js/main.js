'use-strict';
let DRV = window.DRV || {};

DRV.Nav = {
  $body: $('body'),
  openClass: 'opened',
  init() {
    const $openTrigger = $('.burger .fa-bars');
    const $closeTrigger = $('.burger .fa-times, .opened .site-menu a, .opened .curtain');

    $openTrigger.on('click', (e) => {
      e.preventDefault();
      this.setNavOpen();
    });

    $closeTrigger.on('click', (e) => {
      e.preventDefault();
      this.setNavClose();
    });

    $(window).on('resize', () => {
      this.onResizeSetNavClose();
    });
  },
  setNavOpen() {
    this.$body.addClass(this.openClass);
  },
  setNavClose() {
    this.$body.removeClass(this.openClass);
  },
  onResizeSetNavClose() {
    if ($(window).width() > 900 && this.isOpen()) {
      return this.setNavClose();
    }
  },
  isOpen() {
    return this.$body.hasClass(this.openClass);
  },
};

DRV.Hero = {
  init() {
    this.loadImage();
  },
  loadImage() {
    let $hero = $('.hero'),
        src = 'public/dist/img/hollywood.jpg',
        img = new Image(),
        callback = function() {
          DRV.Hero.triggerAnimation();
        };

    img.addEventListener('load', callback);
    img.src = src;
    $hero.css({'background-image': `url('${src}')`});
  },
  triggerAnimation() {
  let $image = $('.img-overlay'),
      $hero = $('.hero');


    $hero.css({'visibility': 'visible'});
    $hero.addClass('fadeIn');
    $image.css({'display': 'inline-block'});
  }
};

DRV.Grid = {
  init() {
    this.setDimensions();
  },
  onResize() {
    this.setDimensions();
  },
  setDimensions() {
    let windowX = $(window).width(),
        $cells = $('.client-item');

    if (windowX < 400) {
      $cells.height(windowX);
    }
    else if (windowX >= 400 && windowX < 600) {
      $cells.height(windowX / 2);
    }
    else if (windowX >= 600 && windowX < 1200) {
      $cells.height(windowX / 4);
    }
    else if (windowX >= 1200) {
      $cells.height(300);
    }
  }
};

$(document).on('ready', function() {
  DRV.Nav.init();
  DRV.Hero.init();
  DRV.Grid.init();
});

$(window).resize(function() {
  DRV.Grid.init();
});