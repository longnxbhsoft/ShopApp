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
  product_id: string;
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
  name: string;
  quantity: number;
  product_id: string;
}

export interface HistoryOrder {
  _id: string;
  product: [
    {
      name: string;
      price: {
        salePrice: number;
      };
      quantity: number;
    },
  ];
}
