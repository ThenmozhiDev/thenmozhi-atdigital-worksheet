import React, { Fragment, useState } from "react";
import Cart from "./Components/Card/Cart";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Store/CartProvider";

function App() {
  const [showIsCart, setShowIsCart] = useState(false);

  const showCart = () => {
    setShowIsCart(true);
  };

  const hideCart = () => {
    setShowIsCart(false);
  };

  return (
    <CartProvider>
      {showIsCart && <Cart onClose={hideCart} />}
      <Header onShowCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
