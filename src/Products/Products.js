import React from 'react';
import ProductCard from './ProductCard';
import img1 from '../images/IMG_8647.JPG';
import './Products.css';

function Products() {
    return (
        <div className="products">
            <ProductCard image={img1} title="Birthday Cakes" description="homemade with love" />
            <ProductCard image={img1} title="Birthday Cakes" description="homemade with love" />
            <ProductCard image={img1} title="Birthday Cakes" description="homemade with love" />
            <ProductCard image={img1} title="Birthday Cakes" description="homemade with love" />

        </div>
    )
}

export default Products
