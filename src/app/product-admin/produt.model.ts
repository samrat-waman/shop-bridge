export class Product {
  id: number;
  name: string;
  description: string;
  mrp: number;
  price: number;
  keywords: string;
  quantity: number;
  discount: number;


  constructor() {
    this.id = 0;
    this.name = '';
    this.description = '';
    this.mrp = 0;
    this.price = 0;
    this.keywords = '';
    this.quantity = 0;
    this.discount = 0;

  }
}
