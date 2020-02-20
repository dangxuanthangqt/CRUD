import React, { Component } from 'react';

import { connect } from 'react-redux';
import { act_add_product_request, act_fetch_product_request, act_edit_product_request } from '../Actions/action_products';
export class Add extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:'',
            txtName :"",
            txtPrice:"",
            checkStatus:false,
           
        }
    }
    onChange=(event)=>{
        var name = event.target.name;
        var value = event.target.type ==="checkbox"? event.target.checked : event.target.value;

        this.setState({
            [name] : value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
        //console.log(this.state)
        
        var {id, txtName, txtPrice,checkStatus} = this.state;
        if(id){

            // apiCaller(`/quan-ly-san-pham/sua/${id}`,'post',{
            //     txtName,
            //     txtPrice,
            //     checkStatus
            // }).then(res=>{
            //     console.log(res)
            //   //  this.props.history.goBack()
            
            // })
            this.props.act_edit_product_request(this.state)
            this.props.history.goBack()

        }else{
            var product={
                txtName,
                txtPrice,
                checkStatus
            }
            // apiCaller('/quan-ly-san-pham/them', 'post', {txtName, txtPrice,checkStatus}).then( res =>{
            //     console.log(res)
            //     // this.setState({
            //     //     isRedirect: true
            //     // })
            //      this.props.history.goBack();
                
            // })
            this.props.act_add_product_request(product)
            this.props.history.goBack()
        }
      
       
        // axios.post('http://localhost:4000/them', {
        //     txtName,
        //     txtPrice,
        //     checkStatus
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        // axios({
        //     method : "post",
        //     url: "/them",
        //     data:{txtName, txtPrice,checkStatus} // get thi body =null
        // }).then(res=>{
        //     console.log(res.data)
        //     this.setState({
        //         isRedirect: true
        //     })
        // })
        // .catch(err=>{
        //     console.log(err)
        // })
    }
    // static getDerivedStateFromProps (){
    //     console.log("tesst")
    //     return null
    // }
    UNSAFE_componentWillReceiveProps=(nextprops)=>{
        console.log("nextrops : ", nextprops);
        console.log("this props : ", this.props);

        this.setState({
            txtName : nextprops.product_edit.name,
            txtPrice: nextprops.product_edit.price,
            checkStatus : nextprops.product_edit.status
        })
    }
    componentDidMount =()=>{
        console.log("DID MOUNT")
        var {match} = this.props;
        if(match){
            var id = match.params.id;
          // console.log()
           
            this.props.act_fetch_product_request(id);
            this.setState({
                id:id
            })
        }
    }
    
    onClick=()=>{
        this.props.history.goBack()
    }
    render() {
        var {txtName, txtPrice,id, checkStatus} = this.state;
      
        //console.log(this.props.product_edit)
        
        console.log("Render")
        return (
            <div className="col-sm-6 border rounded p-4 mt-5">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
                        <input 
                        value={txtName}
                        onChange={this.onChange}
                        type="text"
                         name="txtName" 
                         className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên sản phẩm" />
                        <small id="emailHelp" className="form-text text-muted">Nhập tên sản phẩm.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Giá</label>
                        <input 
                        value ={txtPrice}
                        onChange={this.onChange}
                        type="text" name="txtPrice" className="form-control" id="exampleInputPassword1" placeholder="Giá sản phẩm" />
                    </div>
                    <div className="form-check">
                        <input
                        onChange={this.onChange} type="checkbox" checked={checkStatus} name="checkStatus" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Còn hàng</label>
                    </div>
                    <button type="submit" className="btn btn-primary">{id===""? "Thêm": "Lưu chỉnh sửa" }</button>
                    &nbsp;
                    <button type="button" onClick={this.onClick} className="btn btn-danger">Trở lại</button>
                </form>

            </div>
        );
    }
}
const mapStateToProps =(state)=>{
    return {
        product_edit : state.product_edit
    }
}
const mapDispatchToProps = (dispatch, props)=>{
    return {
        act_add_product_request : (product)=>{
            dispatch(act_add_product_request(product))
        },
        act_fetch_product_request: (id)=>{
            dispatch(act_fetch_product_request(id))
        },
        act_edit_product_request : (product)=>{
            dispatch(act_edit_product_request(product))
        }
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Add);
