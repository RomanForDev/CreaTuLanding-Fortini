import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Link, useParams } from 'react-router';
import { getSingleProduct } from "../../mockApiService/mockApiService";
        
function ItemListContainer(){
    const [productos, setProductos] = useState([]);
    const [page, setPage] = useState(0);
    const {id} = useParams()

    useEffect(() => async function callFetch() {
        const request = await fetch('https://fakestoreapi.com/products')
        const response = await request.json()
        setProductos(response);
        console.log(response);
    }, [])
    
    return <div>
            <h1>Productos</h1>
            <div className="products-list">
                {productos.map( product => <>
                <div key={product.id} className="card">
                    <div className="card-img">
                        <img src={product.image} alt=""/>
                    </div>
                <div key={product.id} className="card-body">
                    <h3 className="prod-name" >{product.title}</h3>
                    <h4 className="prod-price" >{product.price}</h4>
                    <Link to="/product/id"><button>Ver Detalle</button></Link>
                        {/* <p className="prod-description">{product.description}</p> */}
                        {/* <button><a href={`https://fakestoreapi.com/products/${prodId}`} target="_blank">Ver Más</a></button> */}
                </div>
            </div>
        </>)
        }
        </div>
        </div>
}

export default ItemListContainer;