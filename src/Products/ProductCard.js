import React from 'react';
import './ProductCard.css';

function ProductCard({ image, title, description, price }) {
    return (
        <div className="productCard">
            <img src={image} alt="" />
            <br></br>
            <div className="productCard__info">
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ProductCard
