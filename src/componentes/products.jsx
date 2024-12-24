import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Products = () => {
    return (
        <div>
           <p>Products</p>
           <Link to="product/1">product 1</Link>
           <Link to="product/2">product 2</Link>
           <Link to="product/3">product 3</Link>

           <Outlet/>
        </div>
    );
}

export default Products;
