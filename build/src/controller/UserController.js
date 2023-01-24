"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const BaseError_1 = require("../errors/BaseError");
class UserController {
    constructor(userBusiness) {
        this.userBusiness = userBusiness;
        this.signup = async (req, res) => {
            try {
                const input = {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                };
                const response = await this.userBusiness.signup(input);
                res.status(201).send(response);
            }
            catch (error) {
                console.log(error);
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" });
            }
        };
        this.login = async (req, res) => {
            try {
                const input = {
                    email: req.body.email,
                    password: req.body.password,
                };
                const response = await this.userBusiness.login(input);
                res.status(200).send(response);
            }
            catch (error) {
                console.log(error);
                if (error instanceof BaseError_1.BaseError) {
                    return res.status(error.statusCode).send({ message: error.message });
                }
                res.status(500).send({ message: "Erro inesperado ao cadastrar usuário" });
            }
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map