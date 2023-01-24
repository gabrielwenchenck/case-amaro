import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { IGetProductsInputDTO } from "../models/Products";

export class ProductController {
  constructor(private productBusiness: ProductBusiness) {}

  public insert = async (req: Request, res: Response) => {
    try {
      const response = await this.productBusiness.insert();
      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  public getProducts = async (req: Request, res: Response) => {
    try {
      const input: IGetProductsInputDTO = {
        token: req.headers.authorization as string,
        search: req.query.search as string,
        order: req.query.order as string,
        sort: req.query.sort as string,
        limit: req.query.limit as string,
        page: req.query.page as string,
      };

      const response = await this.productBusiness.getProducts(input);

      res.status(200).send(response);
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
}
