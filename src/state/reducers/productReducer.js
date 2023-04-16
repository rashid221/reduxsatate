const initialState=[];
const productReducer = (state=initialState,action)=>{
    if(action.type === 'setProducts'){
        return action.payload
    }
    else{
        return state;
    } 
}
export const addReducer = (state=initialState,action)=>{
    // console.log("mypayload",action.payload);
   if(action.type === "add"){
       return [...state,action.payload];

    }
    else if(action.type === "remove"){
        return state.filter((item)=> item.id !== action.payload);
    }
    else{
        return state;
    } 

}
export default productReducer;