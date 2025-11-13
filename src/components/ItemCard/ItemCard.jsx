import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ product }) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={"/" + product.image} alt={product.title} />
            </div>
            <div className="card-body">
                <h3 className="prod-name">{product.title}</h3>
                <h4 className="prod-price">${product.price}</h4>
                <Link to={`/detail/${product.id}`}>
                    <button>Ver Más</button>
                </Link>
            </div>
        </div>
    );
}

export default ItemCard;