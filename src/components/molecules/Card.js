"use strict";
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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var Button_1 = require("../atoms/Button");
var Date_1 = require("../../services/Date");
var enums_1 = require("../../services/enums");
require("./Card.pcss");
var Card = function (props) {
    var _a;
    var highlight = props.highlight, cover = props.cover, event_date = props.event_date, tickets = props.tickets, title = props.title, categories = props.categories, free = props.free;
    function goTo(url) {
        return function () { return (location.href = url); };
    }
    function handleClickReducer(_a) {
        // console.log(evt, action);
        var evt = _a.evt, action = _a.action;
        if (!action)
            return;
        action === null || action === void 0 ? void 0 : action();
        var classNamesArr = evt === null || evt === void 0 ? void 0 : evt.target.className.split(" ");
        var isClickFromPill = classNamesArr === null || classNamesArr === void 0 ? void 0 : classNamesArr.includes("pill");
        if (isClickFromPill)
            return evt === null || evt === void 0 ? void 0 : evt.stopPropagation();
    }
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "card" }, { children: [(0, jsx_runtime_1.jsxs)("span", __assign({ "data-testid": "span", className: "clickable", onClick: function () { var _a; return handleClickReducer({ action: (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, props) }); } }, { children: [(0, jsx_runtime_1.jsx)("img", { className: "card-cover", src: cover, alt: "" }), event_date ? ((0, jsx_runtime_1.jsx)("div", __assign({ "data-testid": "date", className: "card-date" }, { children: Date_1["default"].readableDate(event_date) }))) : null, title ? (0, jsx_runtime_1.jsx)("div", __assign({ className: "card-title" }, { children: title })) : null, (0, jsx_runtime_1.jsx)("div", __assign({ "data-testid": "categories", className: "card-meta" }, { children: (_a = categories === null || categories === void 0 ? void 0 : categories.map(function (item, index) {
                            // validate item, to prevent crash if array come with falsy values
                            if (item)
                                return ((0, jsx_runtime_1.jsx)(Button_1["default"], __assign({ pill: true, target: "_self", onClick: function (evt) {
                                        return handleClickReducer({
                                            evt: evt,
                                            action: goTo("/category/".concat(item.slug))
                                        });
                                    } }, { children: item.name }), index));
                        })) !== null && _a !== void 0 ? _a : null }))] })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "card-bottom" }, { children: (0, jsx_runtime_1.jsx)(Button_1["default"], __assign({ href: tickets, onClick: function (evt) {
                        return handleClickReducer({ action: !tickets ? evt.preventDefault() : "" });
                    }, className: !tickets ? "no-tickets" : "", highlight: highlight, disabled: !tickets, free: free }, { children: free
                        ? free && tickets
                            ? enums_1.TEXT.FREE_TICKETS
                            : enums_1.TEXT.FREE_NO_TICKETS
                        : tickets
                            ? enums_1.TEXT.BUY_TICKETS
                            : enums_1.TEXT.NO_TICKETS })) }))] })));
};
exports["default"] = Card;
