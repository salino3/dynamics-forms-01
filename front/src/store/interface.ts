export interface PropsProduct {
  id?: number;
  name: string;
  items_list: any;
  description?: string;
  general_styles?: string;
  price: number;
  created_at?: string;
  update_at?: string;
}
export interface PropsProvider {
  product: PropsProduct;
  theme: "dark" | "light";
  changeGlobalColors(): void;
  setProducts: (product: PropsProduct) => void;
}
