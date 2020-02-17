import axios from 'axios';
//import * as config from '../Constants/configAPI'

export default function apiCaller  (endpoint, method ='GET', body    ){
    return axios({
        method : method,
        url: `${endpoint}`,
        data:body ,// get thi body =null,
    })
    .catch(err=>{
        console.log(err)
    })
}