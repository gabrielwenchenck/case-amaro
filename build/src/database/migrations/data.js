"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsJson = void 0;
const path_1 = __importDefault(require("path"));
const fs = require("fs");
function readFileJson(file) {
    try {
        let content = fs.readFileSync(file, "utf-8");
        return JSON.parse(content);
    }
    catch (error) {
        console.log(error);
    }
}
const readJson = readFileJson(path_1.default.resolve(__dirname, "./products.json"));
exports.productsJson = readJson.products;
//# sourceMappingURL=data.js.map