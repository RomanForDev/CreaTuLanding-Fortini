import { useState, useEffect } from "react";
import { getSingleProduct } from "../../mockApiService/mockApiService";
import { useParams } from "react-router";

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
            <div className="card">
                <div className="card-img">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="card-body">
                    <h3 className="prod-name">{product.title}</h3>
                    <h4 className="prod-price">{product.price}</h4>
                    <p className="prod-description">{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;