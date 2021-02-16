"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var randomstring = require('randomstring');

var _require = require('../../use-cases/app'),
    addSongs = _require.addSongs,
    readSongs = _require.readSongs,
    updateSongs = _require.updateSongs,
    deleteSongs = _require.deleteSongs;

beforeAll(function () {
  process.env.NODE_ENV = "development";
});
describe('Group of unit Testing Music', function () {
  test("CREATE ---------- must test if data is exist!", function _callee() {
    var id, ReadC, ArrayResult, data, res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            id = {};
            _context.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context.sent;
            ArrayResult = ReadC[ReadC.length - 1];
            data = {
              title: ArrayResult.title,
              composer: ArrayResult.composer
            };
            _context.next = 9;
            return regeneratorRuntime.awrap(addSongs(data));

          case 9:
            res = _context.sent;
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            expect(_context.t0.toString()).toBe("Error: Song is Exist in same composer, please put a new Song");

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 12]]);
  });
  test("CREATE ---------- must test if some data is empty!", function _callee2() {
    var id, ReadC, ArrayResult, data, res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = {};
            _context2.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context2.sent;
            ArrayResult = ReadC[ReadC.length - 1];
            data = {
              title: null,
              composer: ArrayResult.composer
            };
            _context2.next = 9;
            return regeneratorRuntime.awrap(addSongs(data));

          case 9:
            res = _context2.sent;
            console.log();
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](0);
            expect(_context2.t0.toString()).toBe("Error: Please put a song title!!"); //console.log(error)

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 13]]);
  });
  test("CREATE ---------- must test if data is save!", function _callee3() {
    var data, res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            data = {
              title: randomstring.generate({
                length: 12,
                charset: "alphabetic"
              }),
              composer: randomstring.generate({
                length: 12,
                charset: "alphabetic"
              })
            };
            _context3.next = 4;
            return regeneratorRuntime.awrap(addSongs(data));

          case 4:
            res = _context3.sent;
            expect(res).toBeDefined();
            _context3.next = 11;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            //expect(error.toString()).toBe(` `)
            console.log(_context3.t0);

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
  test("READ ---------- must test if data is exist!", function _callee4() {
    var data, res;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            data = {};
            _context4.next = 4;
            return regeneratorRuntime.awrap(readSongs(data));

          case 4:
            res = _context4.sent;
            expect(res).toBeDefined();
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            //expect(error.toString()).toBe(` `)
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
  test("READ ---------- must test if data id not available!", function _callee5() {
    var data, resR, rand, i, elements, res;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            data = {};
            _context5.next = 4;
            return regeneratorRuntime.awrap(readSongs(data));

          case 4:
            resR = _context5.sent;
            rand = Math.floor(Math.random() * 1000000);

            for (i = 0; i < resR.length; i++) {
              elements = resR[i].id;

              if (rand == elements) {
                _readOnlyError("rand"), rand++;
              }
            }

            _context5.next = 9;
            return regeneratorRuntime.awrap(readSongs({
              id: rand
            }));

          case 9:
            res = _context5.sent;
            _context5.next = 15;
            break;

          case 12:
            _context5.prev = 12;
            _context5.t0 = _context5["catch"](0);
            expect(_context5.t0.toString()).toBe("Error: Data is not available on this ID!!"); //console.log(error)

          case 15:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 12]]);
  });
  test("READ ---------- must test if data with parameter exist!", function _callee6() {
    var id, ReadC, ArrayResult, data, res;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            id = {};
            _context6.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context6.sent;
            ArrayResult = ReadC[ReadC.length - 1];
            data = {
              id: ArrayResult.id
            };
            _context6.next = 9;
            return regeneratorRuntime.awrap(readSongs(data));

          case 9:
            res = _context6.sent;
            expect(res).toBeDefined();
            _context6.next = 16;
            break;

          case 13:
            _context6.prev = 13;
            _context6.t0 = _context6["catch"](0);
            //expect(error.toString()).toBe(` `)
            console.log(_context6.t0);

          case 16:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 13]]);
  });
  test("UPDATE ---------- must test if theres no empty fields!", function _callee7() {
    var id, ReadC, ArrayResult, data, res;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            id = {};
            _context7.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context7.sent;
            ArrayResult = ReadC[ReadC.length - 1];
            data = {
              id: ArrayResult.id,
              title: null,
              composer: null
            };
            _context7.next = 9;
            return regeneratorRuntime.awrap(updateSongs(data));

          case 9:
            res = _context7.sent;
            _context7.next = 15;
            break;

          case 12:
            _context7.prev = 12;
            _context7.t0 = _context7["catch"](0);
            expect(_context7.t0.toString()).toBe("Error: Please put a song title!!"); //console.log(error)

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 12]]);
  });
  test("UPDATE ---------- must test if theres is exist data!", function _callee8() {
    var id, ReadC, ArrayResult, data, res;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            id = {};
            _context8.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context8.sent;
            ArrayResult = ReadC[ReadC.length - 1];
            data = {
              id: ArrayResult.id,
              title: ArrayResult.title,
              composer: ArrayResult.composer
            };
            _context8.next = 9;
            return regeneratorRuntime.awrap(updateSongs(data));

          case 9:
            res = _context8.sent;
            console.log(res);
            _context8.next = 16;
            break;

          case 13:
            _context8.prev = 13;
            _context8.t0 = _context8["catch"](0);
            expect(_context8.t0.toString()).toBe("Error: Inputed Data is exist Please Try new."); //console.log(error)

          case 16:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 13]]);
  });
  test("UPDATE ---------- must test if theres no exist id in the record!", function _callee9() {
    var id, ReadC, rand, i, elements, ArrayResult, data, res;
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            id = {};
            _context9.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context9.sent;
            rand = Math.floor(Math.random() * 1000000);

            for (i = 0; i < ReadC.length; i++) {
              elements = ReadC[i].id;

              if (rand == elements) {
                _readOnlyError("rand"), rand++;
              }
            }

            ArrayResult = ReadC[ReadC.length - 1];
            data = {
              id: rand,
              title: randomstring.generate({
                length: 12,
                charset: "alphabetic"
              }),
              composer: randomstring.generate({
                length: 12,
                charset: "alphabetic"
              })
            };
            _context9.next = 11;
            return regeneratorRuntime.awrap(updateSongs(data));

          case 11:
            res = _context9.sent;
            _context9.next = 17;
            break;

          case 14:
            _context9.prev = 14;
            _context9.t0 = _context9["catch"](0);
            expect(_context9.t0.toString()).toBe("Error: unable to update Data is exist or the id is Doesnt exist, please check it carefully"); // console.log(error.message)

          case 17:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 14]]);
  });
  test("UPDATE ---------- must test if update successfully!", function _callee10() {
    var id, ReadC, ArrayResult, data, res;
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            id = {};
            _context10.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context10.sent;
            ArrayResult = ReadC[ReadC.length - 1];
            data = {
              id: ArrayResult.id,
              title: randomstring.generate({
                length: 12,
                charset: "alphabetic"
              }),
              composer: randomstring.generate({
                length: 12,
                charset: "alphabetic"
              })
            };
            _context10.next = 9;
            return regeneratorRuntime.awrap(updateSongs(data));

          case 9:
            res = _context10.sent;
            expect(res).toBe("Update Successfully!");
            _context10.next = 16;
            break;

          case 13:
            _context10.prev = 13;
            _context10.t0 = _context10["catch"](0);
            //expect(error.toString()).toBe(` `)
            console.log(_context10.t0);

          case 16:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 13]]);
  });
  test("DELETE ---------- must test if id doesn't is exist", function _callee11() {
    var id, ReadC, rand, i, elements, res;
    return regeneratorRuntime.async(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            id = {};
            _context11.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context11.sent;
            rand = Math.floor(Math.random() * 1000000);

            for (i = 0; i < ReadC.length; i++) {
              elements = ReadC[i].id;

              if (rand == elements) {
                _readOnlyError("rand"), rand++;
              }
            }

            _context11.next = 9;
            return regeneratorRuntime.awrap(deleteSongs(rand));

          case 9:
            res = _context11.sent;
            _context11.next = 15;
            break;

          case 12:
            _context11.prev = 12;
            _context11.t0 = _context11["catch"](0);
            expect(_context11.t0.toString()).toBe("Error: Data doesn't exist pleasse choose other id"); //console.log(error)

          case 15:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, [[0, 12]]);
  });
  test("DELETE ---------- must test if delete successfully", function _callee12() {
    var id, ReadC, ArrayResult, data, res;
    return regeneratorRuntime.async(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            id = {};
            _context12.next = 4;
            return regeneratorRuntime.awrap(readSongs(id));

          case 4:
            ReadC = _context12.sent;
            ArrayResult = ReadC[ReadC.length - 1];
            data = {
              id: ArrayResult.id
            };
            _context12.next = 9;
            return regeneratorRuntime.awrap(deleteSongs(data));

          case 9:
            res = _context12.sent;
            expect(res).toBe("Delete Successfully");
            _context12.next = 16;
            break;

          case 13:
            _context12.prev = 13;
            _context12.t0 = _context12["catch"](0);
            //expect(error.toString()).toBe(` `)
            console.log(_context12.t0);

          case 16:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, [[0, 13]]);
  });
});