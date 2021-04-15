export interface HeaderList {
  title: string;
  id: string;
}

export interface ProductList {
  title: string;
  id: string;
  url: string;
  price: number;
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
