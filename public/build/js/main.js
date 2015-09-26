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

$(document).on('ready', function() {
  DRV.Nav.init();
});