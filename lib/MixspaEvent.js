"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MixspaEvent =
/*#__PURE__*/
function () {
  function MixspaEvent() {
    _classCallCheck(this, MixspaEvent);
  }

  _createClass(MixspaEvent, null, [{
    key: "on",
    value: function on(type, listener) {
      window.addEventListener(type, function (e) {
        return listener(e.detail);
      });
    }
  }, {
    key: "emit",
    value: function emit(type, message) {
      window.dispatchEvent(new CustomEvent(type, {
        detail: message
      }));
    }
  }]);

  return MixspaEvent;
}();

var _default = MixspaEvent;
exports["default"] = _default;