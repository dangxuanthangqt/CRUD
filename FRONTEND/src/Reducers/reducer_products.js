import * as action_types from '../Constants/action_types'

var initState = [];
const reducer_products = (state = initState, action)=>{
    switch (action.type) {
        case action_types.FETCH_DATA:
            var data = action.data;
            return data;
        case action_types.DELETE_PRODUCT:{
            var id = action.id;
            var temp = state;
            state.forEach((e, index)=>{
                if(e._id === id){
                    temp.splice(index,1);
                }
            })
            return [...temp]
        }
        default:
            return [...state];
    }
}
export default reducer_products;