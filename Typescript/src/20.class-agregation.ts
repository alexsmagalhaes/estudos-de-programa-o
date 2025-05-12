class ShoppingCart {
  private readonly products: Product[] = [];

  add(...products: Product[]) {
    for (const product of products) {
      this.products.push(product);
    }
  }

  amount(): number {
    return this.products.length;
  }

  total(): number {
    return this.products.reduce((total: number, product) => {
      return total + product.price;
    }, 0);
  }
}

class Product {
  constructor(public name: string, public price: number) {}
}

const product = new ShoppingCart();

product.add(new Product("coat", 500));
