export interface HeaderList {
  name: string;
  _id: string;
}

export interface CategoriesList {
  name: string;
  _id: string;
}

export interface ProductList {
  images: any;
  name: string;
  id: string;
  price: {
    originalPrice: number;
    salePrice: number;
  };
  discount: number;
  percent: number;
}

export interface CartList {
  url: string;
  title: string;
  quantity: number;
  price: number;
  total: number;
}

export interface OrderList {
  id: string;
  name: string;
  price: number;
}

export interface HistoryOrder {
  id: string;
  history: [];
}
