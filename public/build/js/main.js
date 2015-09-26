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

$(document).on('ready', function() {
  DRV.Nav.init();
  DRV.Hero.init();
});