import React, { Component } from 'react';
import apiCaller from '../ApiCaller/apiCaller';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
export class Add extends Component {
    constructor(props) {
        super(props);
        this.state={
            txtName :"",
            txtPrice:"",
            checkStatus:false,
            isRedirect :false
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
        
        var {txtName, txtPrice,checkStatus} = this.state;
        var obj ={
            name: txtName,
            price:txtPrice,
            status :checkStatus
        }
      
        apiCaller('/them', 'post', {txtName, txtPrice,checkStatus}).then( res =>{
            console.log(res)
            // this.setState({
            //     isRedirect: true
            // })
             this.props.history.goBack();
            
        })
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
    componentDidUpdate(){
        if(this.state.isRedirect === true){
            this.setState({
                isRedirect:false
            })
        }
    }
    render() {
        var {txtName, txtPrice,checkStatus,isRedirect} = this.state;
        if(isRedirect === true) return(
            <Redirect to="/xem"></Redirect>
        )
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
                        onChange={this.onChange} type="checkbox" name="checkStatus" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Còn hàng</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </form>

            </div>
        );
    }
}

export default Add;
