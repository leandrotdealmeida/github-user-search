"use strict";
exports.__esModule = true;
exports.makeRequest = void 0;
var axios_1 = require("axios");
var BASE_URL = 'https://api.github.com';
exports.makeRequest = function (_a) {
    var _b = _a.method, method = _b === void 0 ? 'GET' : _b, url = _a.url, data = _a.data, params = _a.params;
    return axios_1["default"]({
        method: method,
        url: "" + BASE_URL + url,
        data: data,
        params: params
    });
};
