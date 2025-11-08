import { useState, useEffect } from 'react';
import { getData } from '../../data/mockApiService';
import ItemCard from '../ItemCard/ItemCard';
import CategorySearch from '../CategorySearch/CategorySearch';

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                setProducts(data);
            })
    }, []);

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
