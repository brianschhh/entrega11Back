import ProductService from "../services/product.service.js";

export default class ProductController {
  constructor() {
    this.productService = new ProductService();

    this.createProducts = this.createProducts.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  async createProducts(req, res, next) {
    const cant = req.query.cant;
    try {
      await this.productService.createProducts(cant);
      res.status(200).json("Productos creados!");
    } catch (error) {
      next(error);
    }
  }

  async getProducts(req, res, next) {
    let id = null;
    if (req?.query?.id) id = req.query.id;
    try {
      const { producto, productos } = await this.productService.getProducts(id);
      res.status(200).json({ producto, productos });
    } catch (error) {
      next(error);
    }
  }

  async addProduct(req, res, next) {
    try {
      await this.productService.addProduct();
      res.status(200).send("Usuario agregado");
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    const id = req.params.id;
    const { body } = req;
    try {
      await this.productService.updateProduct(id, body);
      res.status(200).send("Usuario editado");
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    const id = req.params.id;
    try {
      this.productService.deleteProduct(id);
      res.status(200).send("Usuario borrado");
    } catch (error) {
      next(error);
    }
  }
}
