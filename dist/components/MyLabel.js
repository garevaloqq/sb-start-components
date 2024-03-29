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
import { jsx as _jsx } from "react/jsx-runtime";
import "./MyLabel.css";
/**
 * Primary UI component for user label
 */
export var MyLabel = function (_a) {
    var _b = _a.label, label = _b === void 0 ? "Not label" : _b, _c = _a.size, size = _c === void 0 ? "normal" : _c, _d = _a.allCaps, allCaps = _d === void 0 ? false : _d, _e = _a.color, color = _e === void 0 ? "#3d5a80" : _e, _f = _a.backgroundColor, backgroundColor = _f === void 0 ? "transparent" : _f;
    return (_jsx("span", __assign({ className: "label ".concat(size), style: { color: color, backgroundColor: backgroundColor } }, { children: !!allCaps ? label.toLocaleUpperCase() : label })));
};
