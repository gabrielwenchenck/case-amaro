"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBusiness = void 0;
const data_1 = require("../database/migrations/data");
class ProductBusiness {
    constructor(productDatabase, authenticator) {
        this.productDatabase = productDatabase;
        this.authenticator = authenticator;
        this.insert = async () => {
            const mapId = data_1.productsJson.map((product) => {
                return product.id;
            });
            const mapName = data_1.productsJson.map((product) => {
                return product.name;
            });
            const mapTags = data_1.productsJson.map((product) => {
                return product.tags;
            });
            for (let i = 0; i < mapId.length; ++i) {
                await this.productDatabase.insertData(mapId[i], mapName[i], mapTags[i]);
            }
            const response = {
                message: "Dados inseridos com sucesso",
            };
            return response;
        };
    }
}
exports.ProductBusiness = ProductBusiness;
//# sourceMappingURL=ProductBusiness.js.map