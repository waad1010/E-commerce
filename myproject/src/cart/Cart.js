import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import AuthCart from "../store/cart-context";
import { NavLink } from "react-router-dom";
const Cart = (props) => {

  const ctx = useContext(AuthCart);

  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [Error, setError] = useState(null);
  const [done, setDone] = useState(false);

  const totalAmount = ctx.totalAmount;
  const notE = ctx.items.length > 0;

  const onAdd = (item) => {
    ctx.addItem({ ...item, amount: 1 });
  };

  const onRemove = (id) => {
    ctx.removeItem(id);
  };

  const orderH = () => {
    setShow(true);
  };
  const Suborder = async (Data) => {
    setloading(true);
    setDone(false);
    setError(null);
    try {
      const res = await fetch(
        "https://react-http-14993-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: Data,
            order: ctx.items,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Wrong");
      }

      setDone(true);
    } catch (e) {
      setError(e.message);
    }
    setloading(false);
    ctx.clear();
  };

  return (
    //<div>Please</div>
    <Modal onClose={props.onClose}>
     
        <>
          <ul>
            {ctx.items.map((item) => (
              <CartItem
                key={item.id}
                amount= {item.amount}
                title={item.title}
                price={item.price}
                onAdd={onAdd.bind(null, item)}
                onRemove={onRemove.bind(null, item.id)}
              ></CartItem>
            ))}
          </ul>
          <div className={styles.total}>
            <span>Total amount : </span>
            <span>$ {totalAmount}</span>
          </div>

          <div className={styles.actions}>
            <button onClick={props.onClose}>Close </button>
            {notE && <NavLink to='/payment' >
              <button onClick={props.onClose} >
              Order </button>
              </NavLink>}
          </div>
        </>
      
    </Modal>
  );
};

export default Cart;
