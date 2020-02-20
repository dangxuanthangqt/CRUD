import React, { Component } from 'react';
import Xem from '../Components/Xem';


import Row from '../Components/Row';
import { Link } from 'react-router-dom';
import {act_fetchdata_requests} from '../Actions/action_products'
import { connect } from 'react-redux';
export class QuanLySanPham extends Component {
  
    // UNSAFE_componentWillMount(){
    //     console.log("1111111111111111111111111111111111111")
    // }
    componentDidMount() {
        //  console.log("333333333333333333333333333333333333333")
        // apiCaller('/quan-ly-san-pham', 'GET', null).then(res => {
        //     //   console.log(`them thanh cong ${JSON.stringify(res.data)}`)
        //     // this.setState({
        //     //     products: res.data
        //     // })
        //     this.props.act_fetchdata(res.data)
        // })
        this.props.act_fetchdata_requests()
    }
    showProducts = () => {
        var result = null;
        var { products } = this.props;
        if (products.length > 0) {
            result = products.map((e, index) => {
                return <Row key={index} stt={index + 1} product={e}>

                </Row>
            })
        }
        return result;
    }

    render() {
        // console.log("22222222222222222222222222222222")
        return (
            <div className="mt-5 " >
                <Link to="/them-san-pham" className="btn btn-primary mb-2"> <i className="fa fa-plus" aria-hidden="true"></i> Them</Link>
                <Xem>
                    {this.showProducts()}
                </Xem>
            </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return{
        products : state.products
    }
   
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        act_fetchdata_requests : ()=>{
            dispatch(act_fetchdata_requests())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(QuanLySanPham);
