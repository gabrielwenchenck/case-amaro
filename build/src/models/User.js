"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.USER_ROLES = void 0;
var USER_ROLES;
(function (USER_ROLES) {
    USER_ROLES["NORMAL"] = "NORMAL";
    USER_ROLES["ADMIN"] = "ADMIN";
})(USER_ROLES = exports.USER_ROLES || (exports.USER_ROLES = {}));
class User {
    constructor(id, name, email, password, role) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.getId = () => {
            return this.id;
        };
        this.getName = () => {
            return this.name;
        };
        this.getEmail = () => {
            return this.email;
        };
        this.getPassword = () => {
            return this.password;
        };
        this.getRole = () => {
            return this.role;
        };
        this.setId = (newId) => {
            this.id = newId;
        };
        this.setName = (newName) => {
            this.name = newName;
        };
        this.setEmail = (newEmail) => {
            this.email = newEmail;
        };
        this.setPassword = (newPassword) => {
            this.password = newPassword;
        };
        this.setRole = (newRole) => {
            this.role = newRole;
        };
    }
}
exports.User = User;
//# sourceMappingURL=User.js.map