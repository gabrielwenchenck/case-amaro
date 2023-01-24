"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ProductDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.toProductDBModel = (product) => {
            const productDB = {
                id: product.getId().toString(),
                name: product.getName(),
                tags: product.getTags(),
            };
            return productDB;
        };
        this.insertData = async (id, name, tags) => {
            await BaseDatabase_1.BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
                .insert({
                id: id,
                name: name,
                tags: JSON.stringify(tags),
            })
                .onDuplicateUpdate("id", "name", "tags");
        };
    }
}
exports.ProductDatabase = ProductDatabase;
ProductDatabase.TABLE_PRODUCTS = "Case_Amaro_Products";
ProductDatabase.TABLE_TAGS = "Case_Amaro_Tags";
//# sourceMappingURL=ProductDatabase.js.map