"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingController = void 0;
const BaseError_1 = require("../errors/BaseError");
class PingController {
    constructor(pingBusiness) {
        this.pingBusiness = pingBusiness;
        this.ping = async (req, res) => {
            try {
                const response = await this.pingBusiness.ping();
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado no endpoint ping" });
            }
        };
    }
}
exports.PingController = PingController;
//# sourceMappingURL=PingController.js.map