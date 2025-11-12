import { useState, useEffect } from 'react';
// import { getData } from '../../data/mockApiService';
import getData, { getProductsByCategory } from '../../data/firestoreService';
import ItemCard from '../ItemCard/ItemCard';
import CategorySearch from '../CategorySearch/CategorySearch';
import { useParams } from 'react-router';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { catParam } = useParams();

    // getData();

    useEffect(() => {
    if ( catParam ){
        getProductsByCategory(catParam)
        .then(  (data) => setViajes(data), console.log("Categorías recibidas")
        );
    }
    else {
        getData()
            .then((data) => {
                console.log("Datos recibidos");
                setProducts(data);
            })
    }}, []);

    return ( <div>
        <CategorySearch key={catParam}/>
        <div className="item-list-container">
            {products.map((product) => (
                <ItemCard key={product.id} product={product} />
            ))}
        </div>
        </div>
    );
}

export default ItemListContainer;

/// prueba