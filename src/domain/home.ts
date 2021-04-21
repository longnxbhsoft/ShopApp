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
  _id: string;
  price: {
    originalPrice: number;
    salePrice: number;
  };
  discount: number;
  percent: number;
}

export interface CartList {
  image: string;
  name: string;
  quantity: number;
  price: {
    originalPrice: number;
    salePrice: number;
  };
  total: number;
}

export interface OrderList {
  price: {
    originalPrice?: string;
    salePrice?: string;
  };
  name?: string;
  quantity: number;
}

export interface HistoryOrder {
  _id: string;
  product: [];
}
