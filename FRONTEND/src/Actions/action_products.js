

import * as action_types  from '../Constants/action_types'
import apiCaller from '../ApiCaller/apiCaller'


export const act_fetchdata_requests =()=>{
    return dispatch =>{
        return apiCaller('/quan-ly-san-pham','get',null).then(res=>{
            dispatch(act_fetchdata(res.data))
        })
    }
}


export const act_fetchdata = (data)=>{
    return{
        type:action_types.FETCH_DATA,
        data
    }

}
export const act_fetch_product_request = (id) =>{
    return dispatch =>{
        return apiCaller ('/quan-ly-san-pham/'+id, 'get',null).then(res =>{
                dispatch(act_fetch_product(res.data))
        })
    }

}
export const act_fetch_product =(product)=>{
    return {
        type: action_types.EDIT_PRODUCT,
        product

    }
}
export const act_edit_product_request = (product_edit)=>{
     return dispatch =>{
         return apiCaller('/quan-ly-san-pham/sua/'+ product_edit.id,'put', product_edit ).then(res=>{
             console.log("CHINH SUA THANH CONG")
         })
     }
}


export const act_add_product_request = (product)=>{
    return dispatch => {
            return apiCaller('/quan-ly-san-pham/them','post',product).then(res =>{
                console.log("them thanh cong");
                
            })
        }
        
    
}




export const act_delete_product_request =(id)=>{
    return dispatch =>{
        return apiCaller('quan-ly-san-pham/xoa/'+ id, 'delete', id).then(res=>{
            dispatch(act_delete_product(id))
        })
    }
}
export const act_delete_product=(id)=>{
    return{
        type: action_types.DELETE_PRODUCT,
        id
    }

}