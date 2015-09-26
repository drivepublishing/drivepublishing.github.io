'use-strict';

let DRV = window.DRV || {};

DRV.Nav = {
  init() {
    this.listeners();
  },
  listeners() {
    $('.burger-container').on('click', function(e) {
      // DRV.Nav.animateNav(e);
      DRV.Nav.toggleLinks();
    });

    $('.nav-link a, .curtain').on('click', function() {
      $('body').removeClass('on');
    });
  },
  toggleLinks() {
    let $body = $('body');

    $body.toggleClass('on');
  },
  animateNav(e) {
    let $body = $('body');

    if ($body.hasClass('on')) {
      $('.nav-links').removeClass('slideInDown');
      $('.nav-links').addClass('slideOutUp');
    }
    else {
      $('.nav-links').removeClass('slideOutUp');
      $('.nav-links').addClass('slideInDown');
    }
  }
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