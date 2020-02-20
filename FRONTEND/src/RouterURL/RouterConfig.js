import QuanLySanPham from "../Pages/QuanLySanPham"
import TrangChu from "../Pages/TrangChu"
import React from 'react';
import Add from "../Components/Add";

export const routes =[
    {
        path: '/quan-ly-san-pham',
        exact : true,
        main: ()=> <QuanLySanPham></QuanLySanPham>
    },
    {
        path: '/quan-ly-san-pham/sua/:id',
        exact : true,
        main: ({match, history})=> <Add history={history} match={match}></Add>
    },
    {
        path: '/',
        exact : true,
        main: ()=> <TrangChu></TrangChu>
    },
    {
        path:'/them-san-pham',
        exact:false,
        main:({history})=> <Add history={history}></Add>
    }
]