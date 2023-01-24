import { Router } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../database/ProductDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const productRouter = Router();

const productController = new ProductController(
  new ProductBusiness(
    new ProductDatabase(),
    new IdGenerator(),
    new Authenticator()
  )
);

productRouter.post("/insert", productController.insert);
productRouter.get("/", productController.getProducts);
