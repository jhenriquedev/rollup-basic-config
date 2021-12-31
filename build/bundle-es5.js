'use strict';

var _ = require('lodash/string');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);

  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function get() {
            return e[k];
          }
        });
      }
    });
  }

  n["default"] = e;
  return Object.freeze(n);
}

var ___namespace = /*#__PURE__*/_interopNamespace(_);

function hello$1() {
  console.log(___namespace.capitalize('__HELLO__ from a.js'));
}

function goodbye$1() {
  console.log('__GOODBYE__ from b.js');
}

var hello = function hello() {
  console.log('hello from es6.js ');
};

var goodbye = function goodbye() {
  console.log('goodbye from es6.js');
};

hello$1();
goodbye$1();
hello();
goodbye();
