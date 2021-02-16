"use strict";

var readSong = function readSong(_ref) {
  var querys = _ref.querys;
  return function select(info) {
    var data, id, res, items, i, e, res1, _items, _i, _e;

    return regeneratorRuntime.async(function select$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            data = [];
            id = info.id;

            if (!id) {
              _context.next = 14;
              break;
            }

            _context.next = 5;
            return regeneratorRuntime.awrap(querys.readOneData({
              id: id
            }));

          case 5:
            res = _context.sent;

            if (!(res.rowCount > 0)) {
              _context.next = 11;
              break;
            }

            items = res.rows;

            for (i = 0; i < items.length; i++) {
              e = items[i];
              data.push({
                id: e.id,
                title: e.title,
                composer: e.composer
              });
            }

            _context.next = 12;
            break;

          case 11:
            throw new Error("Data is not available on this ID!!");

          case 12:
            _context.next = 23;
            break;

          case 14:
            _context.next = 16;
            return regeneratorRuntime.awrap(querys.readAllData({}));

          case 16:
            res1 = _context.sent;

            if (!(res1.rowCount > 0)) {
              _context.next = 22;
              break;
            }

            _items = res1.rows;

            for (_i = 0; _i < _items.length; _i++) {
              _e = _items[_i];
              data.push({
                id: _e.id,
                title: _e.title,
                composer: _e.composer
              });
            }

            _context.next = 23;
            break;

          case 22:
            throw new Error("Empty Data Please Insert First!!");

          case 23:
            return _context.abrupt("return", data);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

module.exports = readSong;