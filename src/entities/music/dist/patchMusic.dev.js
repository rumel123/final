"use strict";

function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure undefined"); }

var patchMusic = function patchMusic(_ref) {
  _objectDestructuringEmpty(_ref);

  return function make(id) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        title = _ref2.title,
        composer = _ref2.composer;

    if (!id) {
      throw new Error("Please enter the ID!!");
    }

    if (!title) {
      throw new Error("Please put a song title!!");
    }

    if (!composer) {
      throw new Error("Please put a composer of the song!!");
    }

    return Object.freeze({
      getID: function getID() {
        return id;
      },
      getT: function getT() {
        return title;
      },
      getC: function getC() {
        return composer;
      }
    });
  };
};

module.exports = patchMusic;