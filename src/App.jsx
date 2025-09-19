import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <>
    <NavBar />
      <div>
        <ItemListContainer greeting= {'Bienvenidos!'}/>
        <p>Proyecto comisión 88080 Coderhouse.</p>
      </div>
    </>
  )
}

export default App
