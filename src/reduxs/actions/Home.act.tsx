import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const addToCart = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload,
    });
  };
};

export const addToCartDetail = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'ADD_TO_CART_DETAIL',
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

export const Login = (phone: string, password: string) => {
  return (dispatch: any) => {
    dispatch({
      type: 'LOGIN_REQUEST',
    });
    fetch('https://api.cheapsyn.top/user/signin', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        phone: phone,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(async responseJson => {
        if (responseJson.success) {
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: responseJson,
          });
          await AsyncStorage.setItem('id', responseJson._id);
        } else {
          dispatch({
            type: 'LOGIN_FAILED',
          });
          Alert.alert('Thông báo', responseJson.error);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const getInfo = (userID: string) => {
  return (dispatch: any) => {
    fetch('https://api.cheapsyn.top/user/getbyid', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: userID,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'GET_INFO',
          payload: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const getOrder = (userID: string) => {
  return (dispatch: any) => {
    fetch('https://api.cheapsyn.top/order/getbyiduser', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: userID,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'GET_ORDER',
          payload: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const getDetail = (id: string) => {
  return (dispatch: any) => {
    dispatch({
      type: 'GET_DETAIL_REQUEST',
    });
    fetch('https://api.cheapsyn.top/product/getbyid', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: id,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        dispatch({
          type: 'GET_DETAIL_SUCCESS',
          payload: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const postOrder = (
  cart: [],
  userID: string,
  quantity: number,
  total: number,
  address: string,
  phone: string,
  name: string,
) => {
  return (dispatch: any) => {
    dispatch({
      type: 'POST_ORDER_REQUEST',
    });
    fetch('https://api.cheapsyn.top/order/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: cart,
        user: userID,
        quantity: quantity,
        total: total,
        address: address,
        phone: phone,
        name: name,
      }),
    })
      .then(response => response.json())
      .then(async responseJson => {
        dispatch({
          type: 'POST_ORDER_SUCCESS',
          payload: responseJson._id,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
};

export const DeleteCart = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'DELETE_CART',
    });
  };
};

export const IncreaseQuantity = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload,
    });
  };
};

export const DecreaseQuantity = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload,
    });
  };
};

export const DeleteItem = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload,
    });
  };
};

export const CheckLogin = (payload: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'CHECK_LOGIN',
      payload,
    });
  };
};

export const Logout = () => {
  return (dispatch: any) => {
    dispatch({
      type: 'LOG_OUT',
    });
  };
};

export const Register = (
  name: string,
  phone: string,
  password: number,
  address: string,
  email: string,
) => {
  return (dispatch: any) => {
    dispatch({
      type: 'REGISTER_REQUEST',
    });
    fetch('https://api.cheapsyn.top/user/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        password: password,
        address: address,
        email: email,
        sex: 'men',
        BOD: '2020-10-03',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.success) {
          console.log(responseJson);
          dispatch({
            type: 'REGISTER_SUCCESS',
            payload: responseJson,
          });
        } else {
          dispatch({
            type: 'REGISTER_FAILED',
            payload: responseJson.error,
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
};
