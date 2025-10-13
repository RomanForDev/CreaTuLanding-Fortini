import { useState, useEffect } from 'react';
import { getData } from '../../mockApiService/mockApiService';
import ItemCard from '../ItemCard/ItemCard';

function ItemListContainer() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getData()
            .then((data) => {
                setProducts(data);
            })
    }, []);

    return (
        <div className="item-list-container">
            {products.map((product) => (
                <ItemCard key={product.id} product={product} />
            ))}
        </div>
    );
}

export default ItemListContainer;
