import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state";
import { bindActionCreators } from "redux";

const Cart = () => {
  

  const dispatch = useDispatch();
  const {removetoCart} = bindActionCreators(actionCreators, dispatch);
  const getShow = useSelector((state) => state.getValue);
return (
    <>
       <h2 style={{textAlign:"center",margin:"20px 0px"}}>Added products</h2>

        <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
             {getShow.map(pro => (
          <div
            style={{
              width: "30%",
              display:'flex',
              flexBasis:'50%',
              flexDirection:'column',
              margin: "20px",
              padding: "20px",
              boxShadow: "2px 2px 10px -2px black",
              borderRadius: "2px",
            }}
            key={pro.id}
          >
            <img src={pro.image} style={{ width: "50px" }} alt="" />
            <h6>Price : {pro.price}</h6>
            <h5>{pro.title}</h5>
            <button style={{alignSelf:'flex-start',margin:'auto 0px' }}
              className="btn btn-warning"
              onClick={() => 
                removetoCart(pro.id)
              }
            >
              Remove
            </button>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
