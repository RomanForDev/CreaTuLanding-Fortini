import { useState, useEffect } from "react";
import { getSingleProduct } from "../../mockApiService/mockApiService";
import { useParams } from "react-router";
import { Link } from 'react-router';

function ItemDetail() {
    const [product, setProduct] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        getSingleProduct(id)
            .then((data) => {
                setProduct(data);
            })
    }, [id])

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    return (
        <div className="product-detail">
            <div className="card-detail">
                <div className="card-img-detail">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-body-detail">
                    <h3 className="prod-name-detail">{product.title}</h3>
                    <h4 className="prod-price-detail">${product.price}</h4>
                    <p className="prod-description-detail">{product.description}</p>
                    <button><Link to="/products">Volver</Link></button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;