import { getData } from '../../data/mockApiService';
import { useState, useEffect } from 'react';

export default function CategorySearch() {
    const [category, setCategory] = useState([]);
    function handleClick( key ) {
        
    }
    return <>
        <div className='search'>
            <button key={"men's clothing"}>Ropa para Hombres</button>
            <button key={"women's clothing"}>Ropa para Mujeres</button>
            <button key={'jewerley'}>Joyería</button>
            <button key={'electronics'}>Electrónicos</button>
        </div>
    </>
}