import { Product } from "../products/products_model";

export interface BuyNow {
  _id: string;
  userId: string;
  productId: string;
  quantity: number;
  product: Product;
  time: Date;
  status: boolean;
}
