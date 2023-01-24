import { BaseDatabase } from "../BaseDatabase";
import { ProductDatabase } from "../ProductDatabase";

class Migrations extends BaseDatabase {
  execute = async () => {
    try {
      console.log("Creating tables...");
      await this.createTables();
      console.log("Tables created successfully.");

      console.log("Migrations completed.");
    } catch (error) {
      console.log("FAILED! Error in migrations...");
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      console.log("Ending connection...");
      BaseDatabase.connection.destroy();
      console.log("Connection closed graciously.");
    }
  };

  createTables = async () => {
    await BaseDatabase.connection.raw(`
        
        CREATE TABLE IF NOT EXISTS ${ProductDatabase.TABLE_PRODUCTS}(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            tags JSON NOT NULL
        );
        `);
  };
}

const migrations = new Migrations();
migrations.execute();
