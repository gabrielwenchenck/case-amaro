"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingRouter = void 0;
const express_1 = require("express");
const PingBusiness_1 = require("../business/PingBusiness");
const PingController_1 = require("../controller/PingController");
exports.pingRouter = (0, express_1.Router)();
const pingController = new PingController_1.PingController(new PingBusiness_1.PingBusiness());
exports.pingRouter.get("/", pingController.ping);
//# sourceMappingURL=pingRouter.js.map