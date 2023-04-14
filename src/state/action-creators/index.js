export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "deposit",
      payload: amount,
    });
  };  
};

export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: "withdraw",
      payload: amount,
    });
  };
};

export const addCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: "addCart",
      payload: product,
    });
  };
};

export const removeCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: "removeCart",
      payload: product,
    });
  };
};


