import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { ProductBusiness } from "../src/business/ProductBusiness";
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";

describe("Testando o método insert da ProductBusiness", () => {
  const productBusiness = new ProductBusiness(
    new ProductDatabaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Um token é retornado quando o cadastro é bem-sucedido", async () => {
    const response = await productBusiness.insert();
    expect(response.message).toBe("Dados inseridos com sucesso");
    expect(response.token).toBe("token-mock");
  });
});
