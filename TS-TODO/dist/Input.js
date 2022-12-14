"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.waitForInput = void 0;
var readline_1 = __importDefault(require("readline"));
// keyboard 입력 처리 
var readlineInterface = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// 사용자가 keybord 입력시 값을 받는다. 
function waitForInput(msg) {
    return new Promise(function (res) {
        return readlineInterface.question(msg, function (key) {
            res(key);
        });
    });
}
exports.waitForInput = waitForInput;
