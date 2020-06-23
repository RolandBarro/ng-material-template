export interface Plan {
  id: string;
  paymentInterval?: string;
  interval?: string;
  priceCents: number;
  currency: string;
}

export interface Product {
  id: string;
  name: string;
  features: string[];
  plans: Plan[];
}

export interface ProductList {
  products: Product[]
}
