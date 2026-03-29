import React, { use } from 'react';

const Products = ({productsPromise}) => {

    const products = use(productsPromise);
    console.log(products , "yes product here");
    

    return (
        <div className='my-20'>
            <h1 className='text-center text-6xl '>hello from Products</h1>
        </div>
    );
};

export default Products;