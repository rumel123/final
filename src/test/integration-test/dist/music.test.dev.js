"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

require("dotenv").config();

var _require = require("express"),
    response = _require.response;

var randomstring = require("randomstring");

beforeAll(function () {
  process.env.NODE_ENV = "development";
});

var routes = require("./music");

describe("Here Must Test The Integration", function () {
  test("CREATE ---------- must test if data is exist! : STATUS CODE 400", function _callee() {
    var resR, fetchDataAll, fetch, info, res, StatusCode;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context.sent;
            fetchDataAll = resR.data.view;
            fetch = fetchDataAll[fetchDataAll.length - 1];
            info = {
              title: fetch.title,
              composer: fetch.composer
            };
            _context.next = 9;
            return regeneratorRuntime.awrap(routes.addSongs({
              info: info
            }));

          case 9:
            res = _context.sent;
            StatusCode = res.response.status;
            expect(StatusCode).toBe(400);
            _context.next = 17;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 14]]);
  });
  test("CREATE ---------- must test if some data is empty! : STATUS CODE 400", function _callee2() {
    var info, res, StatusCode;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            info = {
              title: null,
              composer: null
            };
            _context2.next = 4;
            return regeneratorRuntime.awrap(routes.addSongs({
              info: info
            }));

          case 4:
            res = _context2.sent;
            StatusCode = res.response.status;
            expect(StatusCode).toBe(400);
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 9]]);
  });
  test("CREATE ---------- must test if data is save! : STATUS CODE 200", function _callee3() {
    var info, res, StatusCode;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            info = {
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
            return regeneratorRuntime.awrap(routes.addSongs({
              info: info
            }));

          case 4:
            res = _context3.sent;
            StatusCode = res.status;
            expect(StatusCode).toBe(200);
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 9]]);
  });
  test("READ ---------- must test if data is exist! : STATUS CODE 200", function _callee4() {
    var res, StatusCode;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            res = _context4.sent;
            StatusCode = res.status;
            expect(StatusCode).toBe(200);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 8]]);
  });
  test("READ ---------- must test if data id not available! : STATUS CODE 400", function _callee5() {
    var resR, fetchDataAll, rand, i, elements, res, StatusCode;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context5.sent;
            fetchDataAll = resR.data.view;
            rand = Math.floor(Math.random() * 1000000);

            for (i = 0; i < fetchDataAll.length; i++) {
              elements = fetchDataAll[i].id;

              if (rand == elements) {
                _readOnlyError("rand"), rand++;
              }
            }

            _context5.next = 9;
            return regeneratorRuntime.awrap(routes.readSongsID({
              rand: rand
            }));

          case 9:
            res = _context5.sent;
            StatusCode = res.response.status;
            expect(StatusCode).toBe(400);
            _context5.next = 17;
            break;

          case 14:
            _context5.prev = 14;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);

          case 17:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[0, 14]]);
  });
  test("READ ---------- must test if data with parameter exist! : STATUS CODE 200", function _callee6() {
    var resR, fetchDataAll, fetch, id, res, StatusCode;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context6.sent;
            fetchDataAll = resR.data.view;
            fetch = fetchDataAll[fetchDataAll.length - 1];
            id = fetch.id;
            _context6.next = 9;
            return regeneratorRuntime.awrap(routes.readSongsID(id));

          case 9:
            res = _context6.sent;
            StatusCode = res.status;
            expect(StatusCode).toBe(200);
            _context6.next = 17;
            break;

          case 14:
            _context6.prev = 14;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 17:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 14]]);
  });
  test("UPDATE ---------- must test if theres empty fields! : STATUS CODE 400", function _callee7() {
    var resR, fetchDataAll, fetch, id, info, res, StatusCode;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.prev = 0;
            _context7.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context7.sent;
            fetchDataAll = resR.data.view;
            fetch = fetchDataAll[fetchDataAll.length - 1];
            id = fetch.id;
            info = {
              title: null,
              composer: null
            };
            _context7.next = 10;
            return regeneratorRuntime.awrap(routes.updateSongs({
              id: id,
              info: info
            }));

          case 10:
            res = _context7.sent;
            StatusCode = res.response.status;
            expect(StatusCode).toBe(400);
            _context7.next = 18;
            break;

          case 15:
            _context7.prev = 15;
            _context7.t0 = _context7["catch"](0);
            console.log(_context7.t0);

          case 18:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[0, 15]]);
  });
  test("UPDATE ---------- must test if theres is exist data! : STATUS CODE 400", function _callee8() {
    var resR, fetchDataAll, fetch, id, info, res, StatusCode;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context8.sent;
            fetchDataAll = resR.data.view;
            fetch = fetchDataAll[fetchDataAll.length - 1];
            id = fetch.id;
            info = {
              title: fetch.title,
              composer: fetch.composer
            };
            _context8.next = 10;
            return regeneratorRuntime.awrap(routes.updateSongs({
              id: id,
              info: info
            }));

          case 10:
            res = _context8.sent;
            StatusCode = res.response.status;
            expect(StatusCode).toBe(400);
            _context8.next = 18;
            break;

          case 15:
            _context8.prev = 15;
            _context8.t0 = _context8["catch"](0);
            console.log(_context8.t0);

          case 18:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 15]]);
  });
  test("UPDATE ---------- must test if theres no exist id in the record! : STATUS CODE 400", function _callee9() {
    var resR, fetchDataAll, rand, i, elements, id, info, res, StatusCode;
    return regeneratorRuntime.async(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.prev = 0;
            _context9.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context9.sent;
            fetchDataAll = resR.data.view;
            rand = Math.floor(Math.random() * 1000000);

            for (i = 0; i < fetchDataAll.length; i++) {
              elements = fetchDataAll[i].id;

              if (rand == elements) {
                _readOnlyError("rand"), rand++;
              }
            }

            id = rand;
            info = {
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
            return regeneratorRuntime.awrap(routes.updateSongs({
              id: id,
              info: info
            }));

          case 11:
            res = _context9.sent;
            StatusCode = res.response.status;
            expect(StatusCode).toBe(400);
            _context9.next = 19;
            break;

          case 16:
            _context9.prev = 16;
            _context9.t0 = _context9["catch"](0);
            console.log(_context9.t0.message);

          case 19:
          case "end":
            return _context9.stop();
        }
      }
    }, null, null, [[0, 16]]);
  });
  test("UPDATE ---------- must test if update successfully! : STATUS CODE 200", function _callee10() {
    var resR, fetchDataAll, fetch, id, info, res, StatusCode;
    return regeneratorRuntime.async(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            _context10.prev = 0;
            _context10.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context10.sent;
            fetchDataAll = resR.data.view;
            fetch = fetchDataAll[fetchDataAll.length - 1];
            id = fetch.id;
            info = {
              title: randomstring.generate({
                length: 12,
                charset: "alphabetic"
              }),
              composer: randomstring.generate({
                length: 12,
                charset: "alphabetic"
              })
            };
            _context10.next = 10;
            return regeneratorRuntime.awrap(routes.updateSongs({
              id: id,
              info: info
            }));

          case 10:
            res = _context10.sent;
            StatusCode = res.status;
            expect(StatusCode).toBe(200);
            _context10.next = 18;
            break;

          case 15:
            _context10.prev = 15;
            _context10.t0 = _context10["catch"](0);
            console.log(_context10.t0);

          case 18:
          case "end":
            return _context10.stop();
        }
      }
    }, null, null, [[0, 15]]);
  });
  test("DELETE ---------- must test if id doesn't is exist : STATUS CODE 400", function _callee11() {
    var resR, fetchDataAll, rand, i, elements, id, res, StatusCode;
    return regeneratorRuntime.async(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            _context11.prev = 0;
            _context11.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context11.sent;
            fetchDataAll = resR.data.view;
            rand = Math.floor(Math.random() * 1000000);

            for (i = 0; i < fetchDataAll.length; i++) {
              elements = fetchDataAll[i].id;

              if (rand == elements) {
                _readOnlyError("rand"), rand++;
              }
            }

            id = rand;
            _context11.next = 10;
            return regeneratorRuntime.awrap(routes.deleteSongs(id));

          case 10:
            res = _context11.sent;
            StatusCode = res.response.status;
            expect(StatusCode).toBe(400);
            _context11.next = 18;
            break;

          case 15:
            _context11.prev = 15;
            _context11.t0 = _context11["catch"](0);
            console.log(_context11.t0);

          case 18:
          case "end":
            return _context11.stop();
        }
      }
    }, null, null, [[0, 15]]);
  });
  test("DELETE ---------- must test if delete successfully", function _callee12() {
    var resR, fetchDataAll, fetch, id, res, StatusCode;
    return regeneratorRuntime.async(function _callee12$(_context12) {
      while (1) {
        switch (_context12.prev = _context12.next) {
          case 0:
            _context12.prev = 0;
            _context12.next = 3;
            return regeneratorRuntime.awrap(routes.readSongs());

          case 3:
            resR = _context12.sent;
            fetchDataAll = resR.data.view;
            fetch = fetchDataAll[fetchDataAll.length - 1];
            id = fetch.id;
            _context12.next = 9;
            return regeneratorRuntime.awrap(routes.deleteSongs(id));

          case 9:
            res = _context12.sent;
            StatusCode = res.status;
            expect(StatusCode).toBe(200);
            _context12.next = 17;
            break;

          case 14:
            _context12.prev = 14;
            _context12.t0 = _context12["catch"](0);
            console.log(_context12.t0);

          case 17:
          case "end":
            return _context12.stop();
        }
      }
    }, null, null, [[0, 14]]);
  });
});