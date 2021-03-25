"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compose = void 0;
function compose(...func) {
    return func.reduce((a, b) => (...arg) => a(b(...arg)), (arg) => arg);
}
exports.compose = compose;
