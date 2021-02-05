import React from 'react';
import ProductCard from './ProductCard';
import img1 from '../images/IMG_8647.JPG';
import bdaycake from '../images/bdaycake.JPG';
import Cupcakes from '../images/cupcakes.jpg';
import './Products.css';

function Products() {
    return (
        <div className="products">
            <ProductCard image={bdaycake} title="Birthday Cakes" description="homemade with love" />
            <ProductCard image={Cupcakes} title="Cupcakes" description="cute and yummy" />
            <ProductCard image={img1} title="Swiss rolls" description="tasty and efficient" />
            <ProductCard image={img1} title="Other desserts and bread" description="so many selections" />

        </div>
    )
}

export default Products
