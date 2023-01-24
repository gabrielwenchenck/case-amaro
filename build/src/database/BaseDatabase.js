"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDatabase = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const knex = require("knex");
dotenv_1.default.config();
const { attachOnDuplicateUpdate } = require("knex-on-duplicate-update");
attachOnDuplicateUpdate();
class BaseDatabase {
}
exports.BaseDatabase = BaseDatabase;
BaseDatabase.connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        multipleStatements: true,
    },
});
//# sourceMappingURL=BaseDatabase.js.map