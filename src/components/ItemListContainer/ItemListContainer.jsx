import { useState, useEffect } from 'react';
// import { getData } from '../../data/mockApiService';
import getData, { getProductsByCategory } from '../../data/firestoreService';
import ItemCard from '../ItemCard/ItemCard';
import CategorySearch from '../CategorySearch/CategorySearch';
import { useParams } from 'react-router';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { catParam } = useParams();

    useEffect(() => {
    if ( catParam ){
        getProductsByCategory(catParam)
        .then(  (data) => setViajes(data))
    }
    else {
        console.log("No hay búsqueda por categorías.");
        getData()
            .then((data) => {
                setProducts(data);
            })
    }}, []);

    return ( <div>
        <CategorySearch/>
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