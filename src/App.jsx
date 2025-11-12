import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import MainRender from './components/MainPage/MainPage.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetail from './components/ItemDetail/ItemDetail.jsx';
import CartDetailContainer from './components/CartDetailContainer/CartDetailContainer.jsx';
import Footer from './components/Footer/Footer.jsx';
import { CartContextProvider } from '../context/CartContext.jsx';

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar />
      <p>Proyecto comisión 88080 Coderhouse.</p>
    <Routes>
        <Route path='/products' element={ <ItemListContainer /> }/>
        <Route path='/category/:catParam' element={ <ItemListContainer /> }/>
        <Route path='/contact' element={ <Contact greeting={'Contactanos!'}/> }/>
        <Route path='/about' element={ <About greeting={'Acerca de nosotros:'} /> }/>
        <Route path='/' element={ <MainRender greeting={"Bienvenidos!"}/> }/>
        <Route path='/detail/:id' element={ <ItemDetail /> }/>
        <Route path='*' element={ <h2>404: No pudimos encontrar tu solicitud.</h2> }/>
        <Route path='/cart' element={ <CartDetailContainer /> }/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App
