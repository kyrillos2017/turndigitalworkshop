import { MenuItem } from '../models/products';

export interface Category {
  id: string;
  name: string;
  position: string;
  menuItems: MenuItem[];
}

export interface ServerData {
  categorys : Category[]
}
