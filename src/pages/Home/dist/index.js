"use strict";
exports.__esModule = true;
var Button_1 = require("core/components/Button");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./styles.scss");
var Home = function () { return (react_1["default"].createElement("div", { className: "home-text" },
    react_1["default"].createElement("h1", { className: "text-title" },
        " Desafio do Cap\u00EDtulo 3,",
        react_1["default"].createElement("br", null),
        " Bootcamp DevSuperior "),
    react_1["default"].createElement("p", { className: "text-subtitle" },
        "Bem-vindos ao desafio do cap\u00EDtulo 3 do Bootcamp DevSuperior.",
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        "Favor observar as instru\u00E7\u00F5es passadas no cap\u00EDtulo sobre a elabora\u00E7\u00E3o ",
        react_1["default"].createElement("br", null),
        "deste projeto.",
        react_1["default"].createElement("br", null),
        react_1["default"].createElement("br", null),
        "Este design foi adaptado a partir de Ant Design System for Figma, de",
        react_1["default"].createElement("br", null),
        "Mateusz Wierzbicki: ",
        react_1["default"].createElement("a", { href: "mailto: antforfigma@gmail.com" }, "antforfigma@gmail.com")),
    react_1["default"].createElement("div", { className: "home-button" },
        react_1["default"].createElement(react_router_dom_1.Link, { to: "/search" },
            react_1["default"].createElement(Button_1["default"], { text: "Come\u00E7ar" }))))); };
exports["default"] = Home;
