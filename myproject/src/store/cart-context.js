import React, { useReducer } from "react";
import { toast } from "react-toastify";

const defaultCart = {
  items: [
    //     {
    //    key : '1',
    //     amount:1,
    //     title:"AAA",
    //     price:15
    // }
  ],
  totalAmount: 0,
};

const Red = (state, action) => {
  if (action.type === "Adding") {
    const isIn = state.items.findIndex((item) => +item.id === +action.target.id);
    const it = state.items[isIn];

    if (it && +it.amount + +action.target.amount > +action.target.max ){
      toast.error("You have reached the max amount of this item!");
      return {
        items : state.items,
        totalAmount : state.totalAmount,
      }
      
    }

    if (it) {
     
      let updatedOne;
      updatedOne = {
        ...it,
        amount: it.amount + action.target.amount,
      };
      let newone = [...state.items];
      newone[isIn] = updatedOne;
      return {
        items: newone,

         totalAmount:
          state.totalAmount + action.target.amount * action.target.price,
      };
    } else
      return {
        items: state.items.concat(action.target),
        totalAmount:
          state.totalAmount + action.target.amount * action.target.price,
      };
  } else if (action.type === "Removing") {
    const isIn = state.items.findIndex((item) => item.id === action.target);
    const it = state.items[isIn];

    let updatedOne;
    const newAmount = +it.amount - 1;
    const newTotal = state.totalAmount - it.price;
    if (+newAmount) {
      updatedOne = {
        ...it,
        amount: newAmount,
      };
      let newone = [...state.items];
      newone[isIn] = updatedOne;
      return {
        items: newone,
        totalAmount: newTotal,
      };
    } else {
      const newArr = state.items.filter((item) => item.id !== action.target);

      return {
        items: newArr,
        totalAmount: newTotal,
      };
    }
  }
  if (action.type === "CLEAR") return defaultCart;

  return defaultCart;
};

export const Prov = (props) => {
  const [current, disCurrent] = useReducer(Red, defaultCart);

  const addItemHandler = (item) => {
    console.log("ADding");
    disCurrent({ type: "Adding", target: item });
  };
  const removeItemHandler = (id) => {
    disCurrent({ type: "Removing", target: id });
  };
  const clearH = () => {
    disCurrent({ type: "CLEAR" });
  };

  const cartContext = {
    items: current.items,
    totalAmount: current.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clear: clearH,
  };

  return (
    <AuthCart.Provider value={cartContext}>{props.children}</AuthCart.Provider>
  );
};

const AuthCart = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clear: () => {},
});

export default AuthCart;
