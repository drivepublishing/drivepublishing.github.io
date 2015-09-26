'use-strict';

let DRV = window.DRV || {};

DRV.Nav = {
  init() {
    this.listeners();
  },
  listeners() {
    $('.burger-container').on('click', function() {
      DRV.Nav.toggleLinks();
    });
  },
  toggleLinks() {
    let $body = $('body');

    $body.toggleClass('on');
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
        $cell = $('.client-item');

    if (windowX < 400) {
      $cell.height(windowX);
    }
    else if (windowX >= 400 && windowX < 600) {
      $cell.height(windowX / 2);
    }
    else if (windowX >= 600 && windowX < 1200) {
      $cell.height(windowX / 4);
    }
    else if (windowX >= 1200) {
      $cell.height(300)
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