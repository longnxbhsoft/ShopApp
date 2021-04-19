export const addToCart = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload,
    });
  };
};

export const getAllProducts = () => {
  return (dispatch: any) => {
    fetch('https://api.cheapsyn.top/product/getall', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'GET_ALL_PRODUCTS',
          payload: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const getAllCategories = () => {
  return (dispatch: any) => {
    fetch('https://api.cheapsyn.top/category/getall', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'GET_ALL_CATEGORIES',
          payload: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};
