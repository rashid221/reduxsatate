
const initialState=[]
const productReducer = (state=initialState,action)=>{
    if(action.type === 'setProducts'){
        return action.payload
    }
    else{
        return state;
    } 
}
export const addReducer = (state=[],action)=>{
    console.log("mypayload",action.payload);
   if(action.type === "add"){
       return state.push(action.payload);

    }
    else{
        return state;
    } 

}
export default productReducer;