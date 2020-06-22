export interface Plan {
  id: string;
  paymentInterval: string;
  priceCents: number;
  currency: string;
}

export interface Product {
  id: string;
  name: string;
  features: string[];
  plans: Plan[];
}
