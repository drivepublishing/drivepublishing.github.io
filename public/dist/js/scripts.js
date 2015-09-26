'use strict';

'use-strict';

var DRV = window.DRV || {};

DRV.Nav = {
  init: function init() {
    this.listeners();
  },
  listeners: function listeners() {
    $('.burger-container').on('click', function () {
      DRV.Nav.toggleLinks();
    });
  },
  toggleLinks: function toggleLinks() {
    var $body = $('body');

    $body.toggleClass('on');
  }
};

$(document).on('ready', function () {
  DRV.Nav.init();
});