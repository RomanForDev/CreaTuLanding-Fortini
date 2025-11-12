import { getData } from '../../data/mockApiService';
import { useState, useEffect } from 'react';
import { getProductsByCategory } from '../../data/firestoreService';
import { Link, useParams } from 'react-router';

export default function CategorySearch() {
    const [category, setCategory] = useState([]);
    return <>
        <div className='search'>
            <button key={"men's clothing"}>Ropa para Hombres</button>
            <button key={"women's clothing"}>Ropa para Mujeres</button>
            <button key={'jewerley'}>Joyería</button>
            <button key={'electronics'}>Electrónicos</button>
        </div>
    </>
}

{/* <Link to="category/men's clothing"><button key={"men's clothing"}>Ropa para Hombres</button></Link>
<Link to="category/women's clothing"><button key={"women's clothing"}>Ropa para Mujeres</button></Link>
<Link to="category/jewerley"><button key={'jewerley'}>Joyería</button></Link>
<Link to="category/electronics"><button key={'electronics'}>Electrónicos</button></Link> */}