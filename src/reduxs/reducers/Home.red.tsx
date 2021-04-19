const initialState = {
  all_products: [],
  products: [],
  all_categories: [],
  category: [],
  loading: false,
  numberCart: 0,
  Carts: [],
};

const filter_records = (mainArray: any[], childArray: any[]) => {
  return mainArray.filter((mainElement: {id: any}) => {
    if (childArray.length > 0) {
      let isReturnable = true;
      childArray.forEach((childElement: {id: any}) => {
        if (Number(mainElement.id) === Number(childElement.id)) {
          isReturnable = false;
        }
      });
      return isReturnable;
    } else {
      return mainElement;
    }
  });
};

const reducers = (
  state = initialState,
  action: {type: any; payload: any | number | any[]; number: any},
) => {
  switch (action.type) {
    case 'GET_DATA_REQUEST':
      return Object.assign({}, state, {loading: true});
    case 'GET_ALL_PRODUCTS':
      return Object.assign({}, state, {
        all_products: filter_records(action.payload, state.products),
        loading: false,
      });
    case 'GET_ALL_CATEGORIES':
      return Object.assign({}, state, {
        all_categories: filter_records(action.payload, state.category),
      });
    case 'ADD_TO_CART':
      if (state.numberCart === 0) {
        let cart = {
          product_id: action.payload._id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.images[0],
          price: action.payload.price.salePrice,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.product_id === action.payload._id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            product_id: action.payload._id,
            quantity: 1,
            name: action.payload.name,
            image: action.payload.images[0],
            price: action.payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return Object.assign({}, state, {
        ...state,
        numberCart: state.numberCart + 1,
      });

    default:
      return state;
  }
};

export default reducers;
