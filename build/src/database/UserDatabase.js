"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.toUserDBModel = (user) => {
            const userDB = {
                id: user.getId(),
                name: user.getName(),
                email: user.getEmail(),
                password: user.getPassword(),
                role: user.getRole(),
            };
            return userDB;
        };
        this.findByEmail = async (email) => {
            const result = await BaseDatabase_1.BaseDatabase.connection(UserDatabase.TABLE_USERS)
                .select()
                .where({ email });
            return result[0];
        };
        this.createUser = async (user) => {
            const userDB = this.toUserDBModel(user);
            await BaseDatabase_1.BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(userDB);
        };
    }
}
exports.UserDatabase = UserDatabase;
UserDatabase.TABLE_USERS = "Template_Users";
//# sourceMappingURL=UserDatabase.js.map