import React, {Fragment, useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart'

function App() {

  const[showModal, setShowModal] = useState(false);

  const modalShow = () => {
    setShowModal(true);
  }
  const modalHide = () => {
    setShowModal(false);
  }

  return (
    <Fragment>
      {showModal && <Cart onClose={modalHide}/>}
      <Header onShow={modalShow}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
