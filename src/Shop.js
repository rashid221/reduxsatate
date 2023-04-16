import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { bindActionCreators } from 'redux';
import { actionCreators } from "./state";
import { bindActionCreators } from "redux";
import { useEffect } from "react";

const Shop = () => {
  useEffect(() => {
    getApiData();
  },[]);

  const dispatch = useDispatch();
  const {addtoCart,getApiData} = bindActionCreators(actionCreators, dispatch);

  const products = useSelector((state) => state.addValue);
//   const val = useSelector((state) => state.value);
// console.log(getShow.length);
return (
    <>
      {/* <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}>-</button>
         Update Balance  {balance}
         <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}>+</button>
         {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
         Update Balance  
         <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
      {/* <button className='btn btn-warning mx-2' onClick={()=>{addCart(3)}}>Add To Cart</button>
        <button className='btn btn-warning mx-2' onClick={()=>{removeCart(1)}}>Remove To Cart</button>

        </div> */}
        
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >

         {products.map(items => (
          <div
            style={{
              width: "30%",
              margin: "20px",
              padding: "20px",
              boxShadow: "2px 2px 10px -2px black",
              borderRadius: "2px",
            }}
            key={items.id}
          >
            <img src={items.image} style={{ width: "50px" }} alt="" />
            <h6>Price : {items.price}</h6>
            <h5>{items.title}</h5>
            <button
              className="btn btn-warning"
              onClick={() => 
                addtoCart(items)
              }
            >
              Add to Cart
            </button>
          </div>
        ))}   
      </div>
    </>
  );
};

export default Shop;
