"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    constructor(productBusiness) {
        this.productBusiness = productBusiness;
        this.insert = async (req, res) => {
            try {
                const token = req.headers.authorization;
                const response = await this.productBusiness.insert();
                res.status(200).send(response);
            }
            catch (error) {
                res.status(error.statusCode || 500).send({ message: error.message });
            }
        };
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map