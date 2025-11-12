import { getData } from '../../data/mockApiService';
import { useState, useEffect } from 'react';
import { getProductsByCategory } from '../../data/firestoreService';
import { Link, useParams } from 'react-router';

export default function CategorySearch() {
    const [category, setCategory] = useState([]);
    return <>
        <div className='search'>
            <Link to="/category/men's clothing"><button key={"men's clothing"}>Ropa para Hombres</button></Link>
            <Link to="/category/women's clothing"><button key={"women's clothing"}>Ropa para Mujeres</button></Link>
            <Link to="/category/jewelery"><button key={'jewelery'}>Joyería</button></Link>
            <Link to="/category/electronics"><button key={'electronics'}>Electrónicos</button></Link>
        </div>
    </>
}