import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'
import CartProvider from "./Store/CartProvider";

function App() {

  const[showModal, setShowModal] = useState(false);

  const modalShow = () => {
    setShowModal(true);
  }
  const modalHide = () => {
    setShowModal(false);
  }

  return (
    <CartProvider>
      {showModal && <Cart onClose={modalHide}/>}
      <Header onShow={modalShow}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
