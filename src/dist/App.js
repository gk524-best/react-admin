"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a;
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var react_helmet_1 = require("react-helmet");
var CssBaseline_1 = require("@material-ui/core/CssBaseline");
var styled_components_1 = require("styled-components");
var styles_1 = require("@material-ui/core/styles");
var jss_1 = require("jss");
var index_1 = require("routes/index");
var theme_1 = require("./theme");
require("./App");
var jssHtml = (_a = document.getElementById('jss-insertion-point')) !== null && _a !== void 0 ? _a : undefined;
var jss = jss_1.create(__assign(__assign({}, styles_1.jssPreset()), { insertionPoint: jssHtml }));
var GlobalStyle = styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size:100%;\n    font: inherit;\n    vertical-align: baseline;\n    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  html,body,#root {\n    width: 100%;\n    height: 100%;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  .icon {\n    width: 1em;\n    height: 1em;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n  }\n"], ["\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size:100%;\n    font: inherit;\n    vertical-align: baseline;\n    font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Hiragino Sans GB,Microsoft YaHei,Helvetica Neue,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n  /* HTML5 display-role reset for older browsers */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n  }\n  html,body,#root {\n    width: 100%;\n    height: 100%;\n  }\n  ol, ul {\n    list-style: none;\n  }\n  blockquote, q {\n    quotes: none;\n  }\n  blockquote:before, blockquote:after,\n  q:before, q:after {\n    content: '';\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  .icon {\n    width: 1em;\n    height: 1em;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n  }\n"])));
function App() {
    var theme = react_redux_1.useSelector(function (state) { return state.themeReducer; });
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(react_helmet_1.Helmet, { titleTemplate: "%s" }),
        react_1["default"].createElement(CssBaseline_1["default"], null),
        react_1["default"].createElement(GlobalStyle, null),
        react_1["default"].createElement(styles_1.StylesProvider, { jss: jss },
            react_1["default"].createElement(styles_1.ThemeProvider, { theme: theme_1["default"](theme.currentTheme) },
                react_1["default"].createElement(styled_components_1.ThemeProvider, { theme: theme_1["default"](theme.currentTheme) },
                    react_1["default"].createElement(index_1["default"], null))))));
}
exports["default"] = App;
var templateObject_1;
