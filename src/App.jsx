import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

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
