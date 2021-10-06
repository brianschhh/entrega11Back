import faker from "faker";
faker.locale = "es";

export default function generateProduct() {
  return {
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    img: faker.image.image(),
  };
}
