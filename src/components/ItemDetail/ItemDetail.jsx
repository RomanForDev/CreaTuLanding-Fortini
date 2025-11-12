import { useState, useEffect, useContext } from "react";
// import { getProductById } from "../../data/mockApiService";
import { getProductById } from "../../data/firestoreService";
import { useParams } from "react-router";
import { Link } from 'react-router';
import cartContext from "../../context/cartContext";

function ItemDetail() {
    const [product, setProduct] = useState({});
    const { id } = useParams()
    const [count, setCount] = useState(1)
    const { addItem } = useContext(cartContext);
    // const [maxValue, setMaxValue] = useState(0);

    useEffect(() => {
        getProductById(id)
            .then((data) => {
                setProduct(data);
                console.log(data);
            })
    }, [id])

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    // function checkAvalaible() {
    //     getProductById( id );
    //     if(id){ () => setMaxValue(id.rating.count)}
    // }

    function sumar(){
    if (count < 0)
        { setCount( count+1 ) }
    // else {
    //     setLimit(true)
    // }
    }

    function addToCart(){
    addItem( { ...product, quantity: count } )
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
                    <button onClick={addToCart}>Agregar al carrito</button> {/*Acá va la funcionalidad para agregar al carrito*/}
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;