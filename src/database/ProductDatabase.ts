import { IGetProductsDBDTO, IProductDB, Product } from "./../models/Products";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCTS = "Case_Amaro_Products";
  public static TABLE_TAGS = "Case_Amaro_Tags";

  insertData = async (
    id: number,
    name: string,
    tags: string[]
  ): Promise<void> => {
    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS)
      .insert({
        id: id,
        name: name,
        tags: JSON.stringify(tags),
      })
      .onDuplicateUpdate("id", "name", "tags");
  };

  public searchProducts = async (
    input: IGetProductsDBDTO
  ): Promise<IProductDB[] | undefined> => {
    const search = input.search;
    const order = input.order;
    const sort = input.sort;
    const limit = input.limit;
    const offset = input.offset;

    const productDB: IProductDB[] = await BaseDatabase.connection(
      ProductDatabase.TABLE_PRODUCTS
    )
      .select()
      .where("name", "LIKE", `%${search}%`)
      .orWhere("tags", "LIKE", `%${search}%`)
      .orWhere("id", "LIKE", `%${search}%`)
      .orderBy(sort, order)
      .limit(limit)
      .offset(offset);
    return productDB;
  };
}
