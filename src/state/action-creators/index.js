export const getApiData = () =>{
  return async(dispatch,getState)=>{
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json(); 
  dispatch({
    type:"setProducts",
    payload:data,
   })
  }
}

export const addtoCart = (value)=>{
return (dispatch) =>{
  dispatch({
    type:"add",
    payload: value,
  })
}
}


export const removetoCart = (value)=>{
  return (dispatch) =>{
    dispatch({
      type:"remove",
      payload: value,
    })
  }
  }

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


