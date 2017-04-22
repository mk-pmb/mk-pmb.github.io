/*jslint indent: 2, maxlen: 80, continue: false, unparam: false */
/* -*- tab-width: 2 -*- */
/*global define: true, module: true, require: true */
define(function (require) {
  'use strict';

  var EX, jq = require('jquery');

  EX = function () {
    jq('#app-init h2').first().text('stub.');
    jq('#app-init p').first().text("There's no website yet.");
  };




  return EX;
});
