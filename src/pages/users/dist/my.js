"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var styled_components_1 = require("styled-components");
var PageWrapper_1 = require("components/PageWrapper");
var Wrapper = styled_components_1["default"](core_1.Paper)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 16px 0;\n  box-shadow: none;\n  ", " {\n    flex-direction: column;\n  }\n"], ["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  padding: 16px 0;\n  box-shadow: none;\n  ", " {\n    flex-direction: column;\n  }\n"])), function (props) { return props.theme.breakpoints.down('md'); });
var Left = styled_components_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  ", " {\n    width: 224px;\n  }\n  ", " {\n    width: 100%;\n  }\n"], ["\n  ", " {\n    width: 224px;\n  }\n  ", " {\n    width: 100%;\n  }\n"])), function (props) { return props.theme.breakpoints.up('md'); }, function (props) { return props.theme.breakpoints.down('md'); });
var MuiListItem = styled_components_1["default"](core_1.ListItem)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  &:not(:first-of-type) {\n    margin-top: 10px;\n  }\n  &.Mui-selected {\n    background-color: ", ";\n    .MuiListItemText-root {\n      color: #fff;\n    }\n  }\n  &:hover {\n    background-color: #fff;\n    .MuiListItemText-root {\n      color: ", ";\n    }\n  }\n  &.Mui-selected:hover {\n    background-color: ", ";\n    .MuiListItemText-root {\n      color: ", ";\n    }\n  }\n"], ["\n  &:not(:first-of-type) {\n    margin-top: 10px;\n  }\n  &.Mui-selected {\n    background-color: ", ";\n    .MuiListItemText-root {\n      color: #fff;\n    }\n  }\n  &:hover {\n    background-color: #fff;\n    .MuiListItemText-root {\n      color: ", ";\n    }\n  }\n  &.Mui-selected:hover {\n    background-color: ", ";\n    .MuiListItemText-root {\n      color: ", ";\n    }\n  }\n"])), function (props) { return props.theme.palette.primary.main; }, function (props) { return props.theme.palette.primary.main; }, function (props) { return props.theme.palette.primary.main; }, function (props) { return props.theme.palette.primary.contrastText; });
var MuiListItemText = styled_components_1["default"](core_1.ListItemText)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: rgba(0, 0, 0, 0.85);\n"], ["\n  color: rgba(0, 0, 0, 0.85);\n"])));
var Right = styled_components_1["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  flex: 1 1;\n  padding: 8px 40px;\n"], ["\n  flex: 1 1;\n  padding: 8px 40px;\n"])));
var Title = styled_components_1["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin-bottom: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 28px;\n"], ["\n  margin-bottom: 12px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 28px;\n"])));
var Container = styled_components_1["default"].div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: flex;\n  padding-top: 12px;\n  .basic-left {\n    min-width: 310px;\n    max-width: 448px;\n  }\n  .basic-right {\n    flex: 1 1;\n    padding-left: 104px;\n  }\n  .form-root {\n  }\n"], ["\n  display: flex;\n  padding-top: 12px;\n  .basic-left {\n    min-width: 310px;\n    max-width: 448px;\n  }\n  .basic-right {\n    flex: 1 1;\n    padding-left: 104px;\n  }\n  .form-root {\n  }\n"])));
var BasicSetting = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(Title, null, "\u57FA\u672C\u8BBE\u7F6E"),
        react_1["default"].createElement(Container, null,
            react_1["default"].createElement("div", { className: "basic-left" },
                react_1["default"].createElement("form", { className: "mui-form" },
                    react_1["default"].createElement(core_1.TextField, { style: { display: 'flex' }, label: "\u59D3\u540D", fullWidth: true }),
                    react_1["default"].createElement(core_1.TextField, { style: { display: 'flex' }, label: "\u8D26\u53F7", fullWidth: true }),
                    react_1["default"].createElement(core_1.TextField, { type: "password", style: { display: 'flex' }, label: "\u5BC6\u7801", fullWidth: true }))),
            react_1["default"].createElement("div", { className: "basic-right" }))));
};
var MyPage = function () {
    var _a = react_1.useState(0), selectIndex = _a[0], setSelectIndex = _a[1];
    return (react_1["default"].createElement(PageWrapper_1["default"], null,
        react_1["default"].createElement(Wrapper, null,
            react_1["default"].createElement(Left, null,
                react_1["default"].createElement(core_1.List, null,
                    react_1["default"].createElement(MuiListItem, { button: true, selected: selectIndex === 0 },
                        react_1["default"].createElement(MuiListItemText, { primary: "\u57FA\u672C\u8BBE\u7F6E" })))),
            react_1["default"].createElement(Right, null,
                react_1["default"].createElement(BasicSetting, null)))));
};
exports["default"] = MyPage;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
