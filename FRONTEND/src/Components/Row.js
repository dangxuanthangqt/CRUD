import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { act_delete_product_request } from '../Actions/action_products';
export class Row extends Component {
    handleClick = (id) => {
        if (confirm("Ban co muon xoa khong?")) { //  eslint-disable-line
            console.log(id)
        //     apiCaller(`/quan-ly-san-pham/xoa/${id}`, 'delete', null).then(res => {
        //         console.log(res)
        //     })
            this.props.act_delete_product_request(id)


        }
    }
    render() {
        var { product, stt } = this.props;
        return (
            <tr>
                <td className="text-center">{stt}</td>
                <td className="text-center">{product.name}</td>

                <td className="text-center">{product.price}$</td>
                <td className="text-center">{product.status === true ? 'Còn hàng' : 'Hết hàng'}</td>
                <td className="text-center">
                    <Link
                        

                        to={`quan-ly-san-pham/sua/${product._id}`} className="btn btn-success">Sửa</Link>
                    &nbsp;
                <button onClick={() => { this.handleClick(product._id) }} type="button" className="btn btn-danger">Xóa</button></td>
            </tr>
        );
    }
}
const mapDispatchToProps = (dispacth, props)=>{
    return {
        act_delete_product_request:(id)=>{
            dispacth(act_delete_product_request(id))
        }
    }
}
export default connect(null, mapDispatchToProps)( Row) ;
