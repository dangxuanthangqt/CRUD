import React, { Component } from 'react';


export class Xem extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: []
    //     }
    // }

    componentDidMount = () => {

        // axios.get('http://localhost:4000/xem')
        //     .then( (response) =>{
        //         // handle success
        //         this.setState({
        //             products: response.data
        //         })
        //         console.log(response.data);

        //         // this.setState({
        //         //     products : response.data
        //         // })
        //     })
        //     .catch(function (error) {
        //         // handle error
        //         console.log(error);
        //     })
        // apiCaller('/xem', 'GET', null).then(res => {
        //     this.setState({
        //         products: res.data
        //     })

        // }).then(res => {
        //     console.log("111111111111111111111111111111111111111111111111111111")
        // })

    }
    render() {
        // console.log(this.state.products)
        // var { products } = this.state;
        // var list = products.map((e, index) => {
        //     return <Row key={index} element={e} index={index}>

        //     </Row>
        // })
        return (

            <div >
              
                <div className="card bg-light col-sm-12" >

                    <div className="card-header text-center">QUẢN LÝ CÔNG VIỆC</div>


                    <div className="card-body">
                        <table className="table table-bordered col-sm-12 ">

                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">Tên</th>
                                    <th className="text-center">Giá</th>
                                    <th className="text-center">Trạng thái</th>
                                    <th className="text-center">Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.props.children}
               
                            </tbody>
                        </table>

                    </div>
                </div>

            </div>


        );
    }
}

export default Xem;
