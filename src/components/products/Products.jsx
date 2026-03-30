import React, { use } from 'react';
import ProductCard from './ProductCard';

const Products = ({productsPromise , carts , setCarts}) => {

    const products = use(productsPromise);
    // console.log(products , "yes product here");
    

    return (
        <div className='my-20'>
            


            <div className='container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:15 xl:gap-20'>

                {
                    products.map(product => <ProductCard key={product.id} product={product} carts={carts} setCarts ={setCarts}/>)
                }

            </div>

        </div>
    );
};

export default Products;