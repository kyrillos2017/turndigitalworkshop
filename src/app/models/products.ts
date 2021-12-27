export interface MenuItem {
  id: string;
  name: string;
  position: number;
  description: string;
  images: string;
  subItems: SubItem[];
}

export interface SubItem {
  id: string;
  name: string;
  position: number;
  price: string;
  consumable: string;
  cuisine_name: string;
  category_name: string;
  discount: Discount;
  tags: any[];
}

export interface Discount {
  type: string;
  amount: string;
}

export interface Product {
  category_name: string;
  price: number;
  id: string;
  name: string;
  position: number;
  description: string;
  images: string;
  subItems: SubItem[];
}

export interface Data {
  categoryName: string,
  products: Product[]
}
