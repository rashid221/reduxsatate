const reducercart = (state=0,action)=>{
    if(action.type === 'addCart'){
        return state + action.payload
    }
   else if(action.type === 'removeCart' && state!==-state){
    return state - action.payload
   }
    else{
        return state;
    } 

}
export default reducercart;