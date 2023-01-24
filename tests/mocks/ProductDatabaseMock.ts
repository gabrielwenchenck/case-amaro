import { productsJson } from "./../../src/database/migrations/data";
import { IGetProductsDBDTO, IProductDB } from "./../../src/models/Products";
import { BaseDatabase } from "../../src/database/BaseDatabase";

export class ProductDatabaseMock extends BaseDatabase {
  public static TABLE_PRODUCTS = "Case_Amaro_Products";
  public static TABLE_TAGS = "Case_Amaro_Tags";

  insertData = async (
    id: number,
    name: string,
    tags: string[]
  ): Promise<void> => {};

  public searchProducts = async (
    input: IGetProductsDBDTO
  ): Promise<IProductDB[] | undefined> => {
    const search = input.search;
    const order = input.order;
    const sort = input.sort;
    const limit = input.limit;
    const offset = input.offset;

    const products: IProductDB[] = [
      {
        id: "8371",
        name: "VESTIDO TRICOT CHEVRON",
        tags: ["balada", "neutro", "delicado", "festa"],
      },
      {
        id: "8367",
        name: "VESTIDO MOLETOM COM CAPUZ MESCLA",
        tags: ["casual", "metal", "metal"],
      },
    ];
    return products;
  };
}
