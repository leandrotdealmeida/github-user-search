"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./styles.scss");
var Button = function (_a) {
    var text = _a.text;
    return (react_1["default"].createElement("div", { className: "display-button" },
        react_1["default"].createElement("button", { className: "button-pos" },
            react_1["default"].createElement("h5", { className: "text-button" }, text))));
};
exports["default"] = Button;
