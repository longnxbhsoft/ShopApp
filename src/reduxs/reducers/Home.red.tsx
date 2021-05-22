const initialState = {
  all_products: [],
  products: [],
  all_categories: [],
  category: [],
  loading: false,
  numberCart: 0,
  Carts: [],
  dataUser: [],
  info: [],
  order: [],
  detail: [],
  postOrder: [],
  success: false,
  login: false,
  error: '',
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
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {loading: true});
    case 'LOGIN_SUCCESS':
      return Object.assign({}, state, {
        info: action.payload,
        loading: false,
        login: true,
      });
    case 'LOGIN_FAILED':
      return Object.assign({}, state, {
        loading: false,
      });
    case 'GET_INFO':
      return Object.assign({}, state, {
        info: action.payload,
      });
    case 'GET_ORDER':
      return Object.assign({}, state, {
        order: action.payload,
      });
    case 'GET_DETAIL_REQUEST':
      return Object.assign({}, state, {loading: true});
    case 'GET_DETAIL_SUCCESS':
      return Object.assign({}, state, {
        detail: action.payload,
        loading: false,
      });
    case 'POST_ORDER_REQUEST':
      return Object.assign({}, state, {loading: true, success: false});
    case 'POST_ORDER_SUCCESS':
      return Object.assign({}, state, {
        postOrder: action.payload,
        loading: false,
        success: true,
      });
    case 'REGISTER_REQUEST':
      return Object.assign({}, state, {loading: true, success: false});
    case 'REGISTER_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        success: true,
      });
    case 'REGISTER_FAILED':
      return Object.assign({}, state, {
        error: action.payload,
        loading: false,
        success: false,
      });
    case 'ADD_TO_CART':
      if (state.numberCart === 0) {
        let cart = {
          product_id: action.payload._id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.images[0],
          price: action.payload.price,
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
    case 'DELETE_CART':
      return Object.assign({}, state, {
        ...state,
        numberCart: 0,
        Carts: [],
      });
    case 'CHECK_LOGIN':
      return Object.assign({}, state, {
        ...state,
        dataUser: action.payload,
        login: true,
      });
    case 'LOG_OUT':
      return Object.assign({}, state, {
        ...state,
        login: false,
      });
    case 'DELETE_ITEM':
      return Object.assign({}, state, {
        ...state,
        numberCart: action.payload.quantity - action.payload.quantity,
        Carts: state.Carts.filter(item => {
          return item.product_id !== action.payload.product_id;
        }),
      });
    case 'ADD_TO_CART_DETAIL':
      if (state.numberCart === 0) {
        let cart = {
          product_id: action.payload._id,
          quantity: 1,
          name: action.payload.name,
          image: action.payload.images.src,
          price: action.payload.price,
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
            image: action.payload.images.src,
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
