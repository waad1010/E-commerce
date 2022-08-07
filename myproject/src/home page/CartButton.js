import React, { useContext, useEffect, useState } from "react";
import styles from "./HeaderButton.module.css";
import MyIcon from "./MyIcon";
import AuthCart from "../store/cart-context";
const CartButton = (props) => {
  const [clicked, setClicked] = useState(false);

  const ctx = useContext(AuthCart);
  const { items } = ctx;
  const res = items.reduce(
    (x, item) => {
      return x + item.amount;
    },

    0
  );

  const btncls = `${styles.button} ${clicked ? styles.bump : ""}`;


  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setClicked(true);
    const timing = setTimeout(
      () => {
        setClicked(false);
      },

      300
    );
    return () => {
      clearTimeout(timing);
    };
  }, [items]);

  return (
    <button className={btncls} onClick={props.show}>
      <span className={styles.icon}>
        
        <MyIcon />
      </span><span>Your Cart</span>
      <span className={styles.badge}>{res}</span>
    </button>
  );
};

export default CartButton;
