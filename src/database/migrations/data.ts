import { Product, IProductDB } from "./../../models/Products";
import path from "path";
const fs = require("fs");

function readFileJson(file: any) {
  try {
    let content = fs.readFileSync(file, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.log(error);
  }
}

const readJson = readFileJson(path.resolve(__dirname, "./products.json"));

export const productsJson = readJson.products;
