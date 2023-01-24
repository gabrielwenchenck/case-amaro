export class AuthenticatorMock {
  public generateToken = (id: string): string => {
    return "token-mock";
  };

  public getTokenPayload = (token: string): string | null => {
    switch (token) {
      case "token-mock":
        const id: string = "id-mock";

        return id;

      default:
        return null;
    }
  };
}
