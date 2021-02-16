"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require("dotenv").config();

var axios = require('axios');

var jwt = require('jsonwebtoken');

var _require = require('../../functions/app'),
    encrypt = _require.encrypt,
    decrypt = _require.decrypt;

var url = "http://localhost:".concat(process.env.PORT);
var username = process.env.SECRET_KEY;
var encryptToks = encrypt(username);
var routes = {
  readSongs: function readSongs() {
    var res;
    return regeneratorRuntime.async(function readSongs$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(axios({
              method: "GET",
              url: "".concat(url, "/music/get/"),
              headers: {
                Authorization: "Bearer ".concat(encryptToks)
              }
            }));

          case 3:
            res = _context.sent;
            return _context.abrupt("return", res);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  },
  readSongsID: function readSongsID(_ref) {
    var id, res;
    return regeneratorRuntime.async(function readSongsID$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = _ref.id;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(axios({
              method: "GET",
              url: "".concat(url, "/music/get/").concat(id),
              headers: {
                Authorization: "Bearer ".concat(encryptToks)
              }
            }));

          case 4:
            res = _context2.sent;
            return _context2.abrupt("return", res);

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            return _context2.abrupt("return", _context2.t0);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 8]]);
  },
  addSongs: function addSongs(_ref2) {
    var info, res;
    return regeneratorRuntime.async(function addSongs$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            info = _ref2.info;
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(axios({
              method: "POST",
              url: "".concat(url, "/music/post/"),
              data: _objectSpread({}, info),
              headers: {
                Authorization: "Bearer ".concat(encryptToks)
              }
            }));

          case 4:
            res = _context3.sent;
            return _context3.abrupt("return", res);

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](1);
            return _context3.abrupt("return", _context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 8]]);
  },
  updateSongs: function updateSongs(_ref3) {
    var id, info, res;
    return regeneratorRuntime.async(function updateSongs$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = _ref3.id, info = _ref3.info;
            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap(axios({
              method: "PATCH",
              url: "".concat(url, "/music/patch/").concat(id),
              data: _objectSpread({}, info),
              headers: {
                Authorization: "Bearer ".concat(encryptToks)
              }
            }));

          case 4:
            res = _context4.sent;
            return _context4.abrupt("return", res);

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            return _context4.abrupt("return", _context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 8]]);
  }
};
module.exports = routes;