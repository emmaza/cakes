import React from 'react';
import ProductCard from './ProductCard';
import img1 from '../images/IMG_8647.JPG';
import bdaycake from '../images/bdaycake.jpg';
import Cupcakes from '../images/cupcakes.jpg';
import './Products.css';

function Products() {
    return (
        <div className="products">
            <ProductCard image={bdaycake} title="Birthday Cakes" description="homemade with love" />
            <ProductCard image={Cupcakes} title="Cupcakes" description="homemade with love" />
            <ProductCard image={img1} title="Swiss rolls" description="homemade with love" />
            <ProductCard image={img1} title="Other desserts and bread" description="homemade with love" />

        </div>
    )
}

export default Products
