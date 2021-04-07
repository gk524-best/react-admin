"use strict";
exports.__esModule = true;
var react_1 = require("react");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var styled_components_1 = require("styled-components");
var useToolbarStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1)
        },
        highlight: theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: styles_1.lighten(theme.palette.primary.dark, 0.85)
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark
            },
        title: {
            flex: '1 1 100%'
        }
    });
});
// tool bar
var EnhancedTableToolbar = function (props) {
    var title = props.title, options = props.options, numSelected = props.numSelected, selectedOptions = props.selectedOptions;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var styles = useToolbarStyles(theme);
    return (react_1["default"].createElement(core_1.Toolbar, null,
        numSelected > 0 ? (react_1["default"].createElement(core_1.Typography, { className: styles.title, color: "inherit", variant: "subtitle1", component: "div" },
            numSelected,
            " \u9009\u4E2D")) : (react_1["default"].createElement(core_1.Typography, { className: styles.title, id: "tableTile", variant: "h6", component: "div" }, title)),
        numSelected > 0
            ? selectedOptions && selectedOptions.map(function (R) { return R; })
            : options && options.map(function (R) { return R; })));
};
// table head
function EnhancedTableHead(props) {
    var total = props.total, numSelected = props.numSelected, onSelectAllClick = props.onSelectAllClick, columns = props.columns;
    return (react_1["default"].createElement(core_1.TableHead, null,
        react_1["default"].createElement(core_1.TableRow, null,
            react_1["default"].createElement(core_1.TableCell, { padding: "checkbox" },
                react_1["default"].createElement(core_1.Checkbox, { indeterminate: numSelected > 0 && numSelected < total, checked: total > 0 && numSelected === total, onChange: onSelectAllClick, inputProps: { 'aria-label': '全选' } })),
            columns.map(function (item) {
                var _a, _b;
                return (react_1["default"].createElement(core_1.TableCell, { key: item.id, align: (_a = item.align) !== null && _a !== void 0 ? _a : 'left', padding: (_b = item.padding) !== null && _b !== void 0 ? _b : 'default' }, item.label));
            }))));
}
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: '100%'
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2)
        },
        table: {
            minWidth: 750
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1
        }
    });
});
var Tables = function (_a) {
    var title = _a.title, total = _a.total, _b = _a.data, data = _b === void 0 ? [] : _b, columns = _a.columns, page = _a.page, onSelectAllClick = _a.onSelectAllClick, _c = _a.options, options = _c === void 0 ? [] : _c, _d = _a.selectedOptions, selectedOptions = _d === void 0 ? [] : _d, _e = _a.rowsPerPage, rowsPerPage = _e === void 0 ? 15 : _e, _f = _a.pageOptions, pageOptions = _f === void 0 ? [15, 25, 50] : _f, _g = _a.handleChangePage, handleChangePage = _g === void 0 ? function () { } : _g, _h = _a.handleChangeRowsPerPage, handleChangeRowsPerPage = _h === void 0 ? function () { } : _h;
    var theme = react_1.useContext(styled_components_1.ThemeContext);
    var styles = useStyles(theme);
    var _j = react_1.useState(0), numSelected = _j[0], setNumSelected = _j[1];
    var handleSelectAllClick = function (event) {
        // if (event.target.checked) {
        //   const newSelecteds = rows.map((n) => n.name);
        //   setSelected(newSelecteds);
        //   return;
        // }
        // setSelected([]);
    };
    var generateTableCell = function (row) {
        return columns.map(function (item) {
            var hasId = row.hasOwnProperty(item.id);
            return (react_1["default"].createElement(core_1.TableCell, null, hasId ? (item.render ? item.render(row.id, row) : row.id) : ''));
        });
    };
    return (react_1["default"].createElement("div", { className: styles.root },
        react_1["default"].createElement(EnhancedTableToolbar, { title: title, options: options, numSelected: numSelected, selectedOptions: selectedOptions }),
        react_1["default"].createElement(core_1.TableContainer, null,
            react_1["default"].createElement(core_1.Table, { className: styles.table, "aria-labelledby": "tableTitle", size: "medium", "aria-label": "enhanced table" },
                react_1["default"].createElement(EnhancedTableHead, { numSelected: numSelected, total: total, onSelectAllClick: handleSelectAllClick, columns: columns }),
                react_1["default"].createElement(core_1.TableBody, null, data.map(function (row) {
                    return react_1["default"].createElement(core_1.TableRow, null, generateTableCell(row));
                })))),
        react_1["default"].createElement(core_1.TablePagination, { color: "primary", rowsPerPageOptions: pageOptions, component: "div", count: total, rowsPerPage: rowsPerPage, page: page, onChangePage: handleChangePage, onChangeRowsPerPage: handleChangeRowsPerPage })));
};
exports["default"] = Tables;
