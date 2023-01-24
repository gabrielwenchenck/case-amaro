"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDatabase_1 = require("../BaseDatabase");
const ProductDatabase_1 = require("../ProductDatabase");
class Migrations extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.execute = async () => {
            try {
                console.log("Creating tables...");
                await this.createTables();
                console.log("Tables created successfully.");
                console.log("Migrations completed.");
            }
            catch (error) {
                console.log("FAILED! Error in migrations...");
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
            finally {
                console.log("Ending connection...");
                BaseDatabase_1.BaseDatabase.connection.destroy();
                console.log("Connection closed graciously.");
            }
        };
        this.createTables = async () => {
            await BaseDatabase_1.BaseDatabase.connection.raw(`
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabase_1.ProductDatabase.TABLE_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            tags JSON NOT NULL
        );
        `);
        };
    }
}
const migrations = new Migrations();
migrations.execute();
//# sourceMappingURL=Migrations.js.map