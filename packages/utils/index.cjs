"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperFirstLetter = exports.lowerFirstLetter = exports.lowerCamelCase = void 0;
function lowerCamelCase(str, separator) {
    if (separator === void 0) { separator = '-'; }
    var arr = str.split(separator); // 先用字符串分割成数组
    return arr.map(function (item, index) {
        if (index == 0)
            return item;
        return item.at(0).toUpperCase() + item.slice(1);
    }).join('');
}
exports.lowerCamelCase = lowerCamelCase;
function lowerFirstLetter(str) {
    if (!str)
        return '';
    return str.at(0).toLowerCase() + str.slice(1);
}
exports.lowerFirstLetter = lowerFirstLetter;
function upperFirstLetter(str) {
    if (!str)
        return '';
    return str.at(0).toUpperCase() + str.slice(1);
}
exports.upperFirstLetter = upperFirstLetter;
