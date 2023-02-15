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
require("./Button.pcss");
{
    /*
    <Button
      href=''
      pill={false}
      highlight={false}
      className={``}
      disabled={false}
      onClick={() =>}
    >
      {children}
    </Button>
  */
}
var Button = function (_a) {
    var pill = _a.pill, highlight = _a.highlight, children = _a.children, disabled = _a.disabled;
    return ((0, jsx_runtime_1.jsx)("button", __assign({ "data-testid": "button-component", className: "".concat(pill ? "pill" : "button", " ").concat(highlight ? "highlight" : "", " ").concat(disabled ? "disabled" : "") }, { children: children })));
};
var Link = function (_a) {
    var _b = _a.pill, pill = _b === void 0 ? false : _b, href = _a.href, _c = _a.target, target = _c === void 0 ? "_blank" : _c, onClick = _a.onClick, className = _a.className, highlight = _a.highlight, disabled = _a.disabled, free = _a.free, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("a", __assign({ href: href, target: target, className: "link ".concat(className, " ").concat(free ? "free" : ""), onClick: function (evt) { return onClick === null || onClick === void 0 ? void 0 : onClick(evt); } }, { children: (0, jsx_runtime_1.jsx)(Button, __assign({ pill: pill, highlight: highlight, disabled: disabled, free: free }, { children: children })) })));
};
exports["default"] = Link;
