import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export class Authenticator {
  generateToken = (id: string): string => {
    const token = jwt.sign({ id: id }, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  };

  getTokenPayload = (token: string): string | null => {
    try {
      const verify = jwt.verify(token, process.env.JWT_KEY as string);

      return verify as string;
    } catch (error) {
      return null;
    }
  };
}
