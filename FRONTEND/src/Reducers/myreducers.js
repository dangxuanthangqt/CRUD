import { combineReducers } from 'redux';

import products from './reducer_products';
import product_edit from './reducer_product_edit';
const myReducers = combineReducers({
    products,product_edit
})
export default myReducers;