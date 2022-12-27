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
import { MyLabel } from "../../components/MyLabel";
export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        color: { control: "color" },
        backgroundColor: { control: "color" },
    },
};
var template = function (args) { return (_jsx(MyLabel, __assign({}, args))); };
export var Basic = template.bind({});
Basic.args = {
    label: "Label text",
    allCaps: false,
    color: "primary",
};
export var AllCaps = template.bind({});
AllCaps.args = {
    size: "normal",
    allCaps: true,
};
export var Secondary = template.bind({});
Secondary.args = {
    size: "normal",
    color: "secondary",
};
export var Tertiary = template.bind({});
Tertiary.args = {
    size: "normal",
    color: "tertiary",
};
export var CustomBackground = template.bind({});
CustomBackground.args = {
    size: "h1",
    color: "white",
    backgroundColor: "black",
};
