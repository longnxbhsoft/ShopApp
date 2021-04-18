const initialState = {
  all_products: [],
  products: [],
  all_categories: [],
  category: [],
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
    case 'GET_ALL_PRODUCTS':
      return Object.assign({}, state, {
        all_products: filter_records(action.payload, state.products),
      });
    case 'GET_ALL_CATEGORIES':
      return Object.assign({}, state, {
        all_categories: filter_records(action.payload, state.category),
      });
    default:
      return state;
  }
};

export default reducers;
