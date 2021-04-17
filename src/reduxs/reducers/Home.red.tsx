const initialState = {
  numberCart: 0,
  Carts: [],
  loading: false,
};

const reducers = (
  state = initialState,
  action: {type: any; payload: any | number | any[]; number: any},
) => {
  switch (action.type) {
    case 'GET_NUMBER_CART':
      return Object.assign({}, state, {
        ...state,
      });
    case 'ADD_TO_CART':
      if (state.numberCart === 0) {
        let cart = {
          product_id: action.payload.id,
          quantity: 1,
          name: action.payload.name,
          image:
            action.payload.images.length !== 0
              ? action.payload.images[0].src
              : 'https://afdublin.extranet-aec.com/img/empty-cart.png',
          price: action.payload.price,
        };
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item, key) => {
          if (item.product_id === action.payload.id) {
            state.Carts[key].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _cart = {
            product_id: action.payload.id,
            quantity: 1,
            name: action.payload.name,
            image:
              action.payload.images.length !== 0
                ? action.payload.images[0].src
                : 'https://afdublin.extranet-aec.com/img/empty-cart.png',
            price: action.payload.price,
          };
          state.Carts.push(_cart);
        }
      }
      return Object.assign({}, state, {
        ...state,
        numberCart: state.numberCart + 1,
      });

    case 'CHANGE_NUMBER':
      return Object.assign({}, state, {
        ...state,
        number: action.number,
      });
    case 'DELETE_CART':
      return Object.assign({}, state, {
        ...state,
        numberCart: 0,
        Carts: [],
        postData: [],
      });
    default:
      return state;
  }
};

export default reducers;
