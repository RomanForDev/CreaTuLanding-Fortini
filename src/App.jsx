import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router';
import MainRender from './components/MainPage/MainPage.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import CallFetch from './components/ItemDetailContainer.jsx/ItemDetailContainer.jsx';
import ItemCard from './components/ItemCard/ItemCard.jsx';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <p>Proyecto comisión 88080 Coderhouse.</p>
    <Routes>
        <Route path='/products' element={ <CallFetch /> }/>
        <Route path='/contact' element={ <Contact greeting={'Contactanos!'}/> }/>
        <Route path='/about' element={ <About greeting={'Acerca de nosotros:'} /> }/>
        <Route path='/cart' element={ <MainRender /> }/>
        <Route path='/detail' element={ <ItemCard /> }/>
        <Route path='*' element={ <h2>404: No pudimos encontrar tu solicitud.</h2> }/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
