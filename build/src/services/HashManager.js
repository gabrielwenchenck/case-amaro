"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashManager = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class HashManager {
    constructor() {
        this.hash = async (plaintext) => {
            const rounds = Number(process.env.BCRYPT_SALT_ROUNDS);
            const salt = await bcryptjs_1.default.genSalt(rounds);
            const hash = await bcryptjs_1.default.hash(plaintext, salt);
            return hash;
        };
        this.compare = async (plaintext, hash) => {
            return bcryptjs_1.default.compare(plaintext, hash);
        };
    }
}
exports.HashManager = HashManager;
//# sourceMappingURL=HashManager.js.map