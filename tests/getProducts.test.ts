import { Product } from "./../src/models/Products";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ProductBusiness } from "../src/business/ProductBusiness";
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { BaseError } from "../src/errors/BaseError";
import { IGetProductsInputDTO } from "../src/models/Products";

describe("Testando o método getProducts da ProductBusiness", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Deve retornar uma lista de produtos", async () => {
    const input: IGetProductsInputDTO = {
      token: "token-mock",
      search: "",
      order: "ASC",
      sort: "name",
      limit: "10",
      page: "1",
    };
    const response = await productBusiness.getProducts(input);
    expect(response.products.length).toEqual(2);
    expect(response.products[0]).toEqual({
      id: "8371",
      name: "VESTIDO TRICOT CHEVRON",
      tags: ["balada", "neutro", "delicado", "festa"],
    });
  });

  test("Erro ao não passar o token", async () => {
    expect.assertions(2);
    try {
      const input: IGetProductsInputDTO = {
        token: "",
        search: "",
        order: "ASC",
        sort: "name",
        limit: "10",
        page: "1",
      };
      await productBusiness.getProducts(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.message).toEqual("Token inválido ou faltando");
        expect(error.statusCode).toEqual(401);
      }
    }
  });
});
