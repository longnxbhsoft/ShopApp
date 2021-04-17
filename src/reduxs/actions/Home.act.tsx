export const addToCart = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload,
    });
  };
};
