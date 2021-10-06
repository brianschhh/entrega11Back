import express from "express";
import ProductController from "../controllers/product.controller.js";

export default class ProductRoute extends express.Router {
  constructor() {
    super();
    this.ProductController = new ProductController();

    this.post("/popular", this.ProductController.createProducts);
    this.get("/", this.ProductController.getProducts);
    this.post("/", this.ProductController.addProduct);
    this.put("/:id", this.ProductController.updateProduct);
    this.delete("/:id", this.ProductController.deleteProduct);
  }
}
