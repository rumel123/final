"use strict";

var _require = require('../entities/music/app'),
    makeSong = _require.makeSong,
    patchSong = _require.patchSong;

var querys = require('../data-access/music/app');

var addSong = require('./create-Songs');

var readSong = require('./read-Songs');

var updateSong = require('./update-Songs');

var deleteSong = require('./delete-Songs');

var addSongs = addSong({
  makeSong: makeSong,
  querys: querys
});
var readSongs = readSong({
  querys: querys
});
var updateSongs = updateSong({
  patchSong: patchSong,
  querys: querys
});
var deleteSongs = deleteSong({
  querys: querys
});
var services = Object.freeze({
  addSongs: addSongs,
  readSongs: readSongs,
  updateSongs: updateSongs,
  deleteSongs: deleteSongs
});
module.exports = services;
module.exports = {
  addSongs: addSongs,
  readSongs: readSongs,
  updateSongs: updateSongs,
  deleteSongs: deleteSongs
};