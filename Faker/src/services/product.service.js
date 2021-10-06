import generateProduct from "../utils/product.utils.js";

export default class ProductService {
  constructor() {
    this.products = [];
    this.lastId = 0;

    this.createProducts = this.createProducts.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  async createProducts() {
    const cantidad = Number(5);
    const products = [];
    for (let i = 0; i < cantidad; i++) {
      const product = {
        id: i + 1,
        ...generateProduct(),
      };
      products.push(product);
    }
    this.lastId = Number(cantidad);
    this.products = products;
    return products;
  }

  async getProducts(id) {
    if (id) {
      return {
        productos: this.products.filter(
          (producto) => producto.id === Number(id)
        ),
      };
    } else {
      return { productos: this.products };
    }
  }

  async addProduct() {
    try {
      this.products.push({
        id: this.lastId + 1,
        ...generateProduct(),
      });
      this.lastId++;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProduct(id, data) {
    let index = null;
    try {
      let producto = this.products.filter((product, _index) => {
        if (product.id === Number(id)) {
          index = _index;
          return product;
        }
      })[0];
      Object.assign(producto, data);
      this.products[index] = producto;
      return;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProduct(id) {
    let index = null;
    try {
      this.products.filter((product, _index) => {
        if (product.id === Number(id)) {
          index = _index;
        }
      });
      this.products.splice(index, 1);
      return;
    } catch (error) {
      throw new Error(error);
    }
  }
}
