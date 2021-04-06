"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var PageWrapper_1 = require("components/PageWrapper");
var Tables_1 = require("components/Tables");
var styled_components_1 = require("styled-components");
var formik_1 = require("formik");
var FormContiner = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 24px 24px 0;\n  margin-bottom: 16px;\n  background: #fff;\n  & .form {\n    width: 100%;\n    display: flex;\n  }\n"], ["\n  padding: 24px 24px 0;\n  margin-bottom: 16px;\n  background: #fff;\n  & .form {\n    width: 100%;\n    display: flex;\n  }\n"])));
var MuiButton = styled_components_1["default"](core_1.Button)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-right: 13px;\n"], ["\n  margin-right: 13px;\n"])));
var FormItem = styled_components_1["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  padding: 0 12px;\n  margin-bottom: 24px;\n"], ["\n  padding: 0 12px;\n  margin-bottom: 24px;\n"])));
var TableContent = styled_components_1["default"](core_1.Paper)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  padding: 0 24px;\n  & .table-toolbar {\n    padding: 16px 0;\n    display: flex;\n    justify-content: space-between;\n  }\n"], ["\n  padding: 0 24px;\n  & .table-toolbar {\n    padding: 16px 0;\n    display: flex;\n    justify-content: space-between;\n  }\n"])));
var TableForm = function (props) {
    var formik = formik_1.useFormik({
        initialValues: {
            name: ''
        },
        onSubmit: function (values) {
            console.log(JSON.stringify(values, null, 2));
        }
    });
    return (react_1["default"].createElement(FormContiner, null,
        react_1["default"].createElement("form", { className: "form", onSubmit: formik.handleSubmit },
            react_1["default"].createElement(FormItem, null,
                react_1["default"].createElement(core_1.TextField, { name: "name", label: "\u59D3\u540D" })),
            react_1["default"].createElement(FormItem, null,
                react_1["default"].createElement(MuiButton, { type: "submit", color: "primary", variant: "contained" }, "\u641C\u7D22"),
                react_1["default"].createElement(MuiButton, { color: "primary", variant: "contained" }, "\u65B0\u589E")))));
};
var columns = [
    {
        id: 'id',
        label: 'ID'
    },
    {
        id: 'name',
        label: '姓名'
    },
    {
        id: 'username',
        label: '账号'
    },
];
var User = function () {
    var _a = react_1.useState(0), total = _a[0], setTotal = _a[1];
    var _b = react_1.useState([]), data = _b[0], setData = _b[1];
    var _c = react_1.useState(0), page = _c[0], setPage = _c[1];
    var _d = react_1.useState('账号列表'), tableTitle = _d[0], setTableTitle = _d[1];
    var handleSelectAllClick = function (event) {
        console.log(event);
    };
    var onClick = function () { };
    return (react_1["default"].createElement(PageWrapper_1["default"], { title: "\u8D26\u53F7\u5217\u8868", breadcrumb: true },
        react_1["default"].createElement(TableForm, { search: onClick }),
        react_1["default"].createElement(TableContent, { elevation: 0 },
            react_1["default"].createElement("div", { className: "table-toolbar" },
                react_1["default"].createElement(Tables_1["default"], { title: tableTitle, total: total, columns: columns, data: data, page: page, onSelectAllClick: handleSelectAllClick })))));
};
exports["default"] = User;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
