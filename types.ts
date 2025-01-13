// types.ts
export interface Product {
  product_id:string;
  category_id: Category;
  _id: string;
  name: string;
  price: string;
  images: image[]; // URLs of images
  rating: number;
  reviewsCount: number;
  colors: string;
  sizes: string;
  description: string;
}

export interface CartItem {
  id: string;
  quantity: number;
  color: string;
  size: string;
}

export interface CartState {
  items: CartItem[];
}
export interface image{
  id: string;
  image_url: string
}
export interface Category{
  id: string;
  createdAt: string;
  is_deleted: boolean;
  name: string;
}