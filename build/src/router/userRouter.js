"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const UserBusiness_1 = require("../business/UserBusiness");
const UserController_1 = require("../controller/UserController");
const UserDatabase_1 = require("../database/UserDatabase");
const Authenticator_1 = require("../services/Authenticator");
const HashManager_1 = require("../services/HashManager");
const IdGenerator_1 = require("../services/IdGenerator");
exports.userRouter = (0, express_1.Router)();
const userController = new UserController_1.UserController(new UserBusiness_1.UserBusiness(new UserDatabase_1.UserDatabase(), new IdGenerator_1.IdGenerator(), new HashManager_1.HashManager(), new Authenticator_1.Authenticator()));
exports.userRouter.post("/signup", userController.signup);
exports.userRouter.post("/login", userController.login);
//# sourceMappingURL=userRouter.js.map