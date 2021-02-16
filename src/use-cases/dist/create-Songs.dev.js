"use strict";

var addSong = function addSong(_ref) {
  var makeSong = _ref.makeSong,
      querys = _ref.querys;
  return function post(info) {
    var datas, data, resRead, res, message;
    return regeneratorRuntime.async(function post$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(makeSong(info));

          case 2:
            datas = _context.sent;
            data = {
              title: datas.getT(),
              composer: datas.getC()
            };
            _context.next = 6;
            return regeneratorRuntime.awrap(querys.checkUpdateForSameValue({
              data: data
            }));

          case 6:
            resRead = _context.sent;
            console.log;

            if (!(resRead.rowCount > 0)) {
              _context.next = 10;
              break;
            }

            throw new Error("Song is Exist in same composer, please put a new Song");

          case 10:
            _context.next = 12;
            return regeneratorRuntime.awrap(querys.createData({
              data: data
            }));

          case 12:
            res = _context.sent;
            message = "Song Does not save. We have A problem!!";
            if (res) message = "Song is Successfully Insert!!";
            return _context.abrupt("return", message);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

module.exports = addSong;