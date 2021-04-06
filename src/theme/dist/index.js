"use strict";
exports.__esModule = true;
var styles_1 = require("@material-ui/core/styles");
var locale_1 = require("@material-ui/core/locale");
var breakpoints_1 = require("./breakpoints");
var overrides_1 = require("./overrides");
var props_1 = require("./props");
var typography_1 = require("./typography");
// 主题色
var variants_1 = require("./variants");
var shadows_1 = require("./shadows");
var createTheme = function (name) {
    var themeConfig = variants_1["default"].find(function (variant) { return variant.name === name; });
    if (!themeConfig) {
        console.warn(new Error("The theme " + name + " is not valid"));
        themeConfig = variants_1["default"][0];
    }
    return styles_1.createMuiTheme({
        spacing: 4,
        breakpoints: breakpoints_1["default"],
        overrides: overrides_1["default"],
        props: props_1["default"],
        typography: typography_1["default"],
        shadows: shadows_1["default"]
    }, {
        name: themeConfig.name,
        header: themeConfig.header,
        footer: themeConfig.footer,
        sidebar: themeConfig.sidebar,
        palette: themeConfig.palette
    }, locale_1.zhCN);
};
exports["default"] = createTheme;
