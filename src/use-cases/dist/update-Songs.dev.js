"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var updateSong = function updateSong(_ref) {
  var patchSong = _ref.patchSong,
      querys = _ref.querys;
  return function put(_ref2) {
    var id, info, data, resReadDataExist, resCheckData, res;
    return regeneratorRuntime.async(function put$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            id = _ref2.id, info = _objectWithoutProperties(_ref2, ["id"]);
            data = patchSong(id, info);
            data = {
              id: data.getID(),
              title: data.getT(),
              composer: data.getC()
            };
            _context.next = 5;
            return regeneratorRuntime.awrap(querys.checkUpdateForSameValue({
              data: data
            }));

          case 5:
            resReadDataExist = _context.sent;

            if (!(resReadDataExist.rowCount > 0)) {
              _context.next = 8;
              break;
            }

            throw new Error("Inputed Data is exist Please Try new.");

          case 8:
            _context.next = 10;
            return regeneratorRuntime.awrap(querys.readOneData({
              id: id.data
            }));

          case 10:
            resCheckData = _context.sent;

            if (!(resCheckData == 0)) {
              _context.next = 13;
              break;
            }

            throw new Error("ID doesnt Exist, Please Choose From the records.");

          case 13:
            _context.next = 15;
            return regeneratorRuntime.awrap(querys.updateData({
              data: data
            }));

          case 15:
            res = _context.sent;

            if (!(res[0] == 1)) {
              _context.next = 19;
              break;
            }

            message = "Update Successfully!";
            return _context.abrupt("return", message);

          case 19:
            throw new Error("unable to update Data is exist or the id is Doesnt exist, please check it carefully");

          case 20:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

module.exports = updateSong;