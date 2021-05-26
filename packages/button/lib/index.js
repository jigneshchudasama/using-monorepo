"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomButton = _styledComponents["default"].button.withConfig({
  displayName: "src__CustomButton",
  componentId: "sc-132cw10-0"
})(["background:black;color:yellow;border-radius:4px;cursor:pointer;font-size:1rem;font-weight:300;padding:9px 36px;"]);

var _default = CustomButton;
exports["default"] = _default;