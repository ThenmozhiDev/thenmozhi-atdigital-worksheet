import React, { useEffect, useState } from "react";
import CartIcon from "../Card/CartIcon";
import classes from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../Store/CartContext";

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false); 

   const cartCtx = useContext(CartContext);
console.log(cartCtx);
  const { items } = cartCtx  
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  console.log(numberOfCartItems);

const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

useEffect(() => {
    if(items.length === 0) {
        return;
    }
setBtnIsHighlighted(true);
const timer = setTimeout(() => {
    setBtnIsHighlighted(false)
}, 300);

return () => {
    clearTimeout(timer);
}
}, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
