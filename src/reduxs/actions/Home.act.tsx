export const addToCart = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload,
    });
  };
};

export const getAllProducts = (
  name: string,
  category: string,
  startPrice: number,
  stopPrice: number,
  offset: number,
) => {
  return (dispatch: any) => {
    dispatch({
      type: 'GET_DATA_REQUEST',
    });
    fetch('https://api.cheapsyn.top/product/getall', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        category: category,
        startPrice: startPrice,
        stopPrice: stopPrice,
        offset: offset,
      }),
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
