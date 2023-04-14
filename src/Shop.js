import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { actionCreators } from './state';
import { bindActionCreators } from 'redux';

const Shop = () => {
    const dataStruct = {
        name:'sahil',
        occupation:'engineer',
        address:'bareilly'
    }
    const dispatch = useDispatch();
    const {withdrawMoney,depositMoney,addCart}=bindActionCreators(actionCreators,dispatch);
    const balance = useSelector(state=>state.amount);
    return (
        <>
        <div className='alignment-content'>
            <div>
            <h2>Deposit/Withdraw Money</h2>
            <button className='btn btn-primary mx-2' onClick={()=>{withdrawMoney(100)}}>-</button>
         Update Balance  {balance}
         <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}>+</button>
         {/* <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
         Update Balance  
         <button className='btn btn-primary mx-2' onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
        <button className='btn btn-warning mx-2' onClick={()=>{addCart(1)}}>Add To Cart</button>
        </div>
        </div>
        
        </>
    );
};

export default Shop;