export type MenuType = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  img?: string;
  color: string;
}[];

export type ProductType = {
  id: string;
  title: string;
  description?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};
