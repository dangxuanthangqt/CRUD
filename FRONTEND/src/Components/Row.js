import React, { Component } from 'react';

export class Row extends Component {
    render() {
        var { element, index } = this.props;
        return (
            <tr>
                <td scope="row" className="text-center">{index}</td>
                <td className="text-center">{element.name}</td>
               
                <td className="text-center">{element.price}$</td>
                <td className="text-center">{element.status=== true ? 'Còn hàng' :'Hết hàng'}</td>
                <td className="text-center"><button type="button" className="btn btn-success">Sửa</button>
                    &nbsp;
                <button type="button" className="btn btn-danger">Xóa</button></td>
            </tr>
        );
    }
}

export default Row;
