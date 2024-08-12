// export default Product
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineAddShoppingCart } from "react-icons/md";

const API_URL = "https://dummyjson.com";

const Product = () => {
    const [offset, setOffset] = useState(1);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`${API_URL}/products`)
            .then(res => setProducts(res.data.products))
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    const handleClick = () => setOffset(prev => prev + 1);
    const handleClick1 = () => setOffset(prev => Math.max(prev - 1, 1));  // Ensure offset doesn't go below 1

    const productItem = products.map((product) => (
        <div 
            key={product.id} 
            className='product__wrapper overflow-hidden group w-[300px] mt-7 relative duration-300 p-5 gap-1 hover:shadow-lg hover:cursor-pointer flex flex-col rounded-[30px]'>
            <img src={product.images?.[0]} className='w-full h-[300px] object-contain' alt={product.title} />
            <p className='text-[red] font-bold'>{product.discountPercentage}%</p>
            <h3 className='text-xl'>{product.title}</h3>
            <p className='line-clamp-1'>{product.description}</p>
            {product.dimensions && (
                <p>{product.dimensions.width}x{product.dimensions.height} cm</p>
            )}
            <p className='text-black text-3xl mb-10 mt-5 font-bold'>{product.price} $</p>
        </div>
    ));

    return (
        <div id="Product" className='mt-16'>
            <div className="container">
                <div className='flex items-end mb-8'>
                    <h2 className='font-extrabold text-4xl'>Скидки <span className='text-red-600 mr-3'>%</span></h2>
                    <p className='font-bold'>Все товары в категории</p>
                </div>
                <div className='flex justify-center flex-wrap'>
                    {productItem}
                </div>
            </div>
        </div>
    );
};

export default Product;
