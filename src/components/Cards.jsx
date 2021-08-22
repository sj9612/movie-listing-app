import React from 'react';
import { useHistory } from 'react-router-dom';

function Cards({ data }) {
    const history = useHistory();

    const routeChange = (product) => {
        history.push('/details', product);
    }
    return (
        <div className="cards-container">
            <div className="cards-wrapper">
                {data.map((product, index) => {
                    return (
                        <div key={index} onClick={() => routeChange(product)} className="product-card">
                            <img src={product.Poster} alt="Poster" className="product-img" />
                            <div className="product-info">
                                <h3 className="product-title">{product.Title}</h3>
                                <span className="product-year">{product.Year}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cards
