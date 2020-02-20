

import * as action_types from '../Constants/action_types';
var initState = {}
const product_edit = (state = initState, action)=>{
    switch (action.type) {
        case action_types.EDIT_PRODUCT:
            
                var product = action.product
            
            return {...product}
    
        default:
            return state;
    }
}
export default product_edit;