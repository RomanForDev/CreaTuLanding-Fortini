import { useState, useEffect } from "react";
import getData from "../../mockApiService/mockApiService";

function ItemCard( prop ) {
    useEffect(()=> getData()
    .then( (data) => {setProducts(data)}
    ), [])
    return <div className="products-list">
                {prop.map( product => <>
                <div key={product.id} className="card">
                    <div className="card-img">
                        <img src={product.image} alt=""/>
                    </div>
                <div className="card-body">
                    <h3 className="prod-name" >{product.title}</h3>
                    <h4 className="prod-price" >{product.price}</h4>
                        <p className="prod-description">{product.description}</p>
                        {/* <button><a href={`https://fakestoreapi.com/products/${prodId}`} target="_blank">Ver Más</a></button> */}
                </div>
            </div>
        </>)
        }
        </div>
}

export default ItemCard;