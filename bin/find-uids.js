#! /usr/bin/env node
// Generated by CoffeeScript 1.8.0
(function() {
  var regex, uids, what, _i, _len, _ref;

  uids = require("../lib/uids");

  _ref = process.argv.slice(2);
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    what = _ref[_i];
    regex = new RegExp(what, "i");
    uids.find(regex);
  }

}).call(this);
