import React from "react";
import { ChevronDown, ChevronUp } from "../icons";

import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseItem,
  decreaseItem,
} from "../features/cart/cartSlice";
export default function CartItem({ id, title, img, price, amount }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title}></img>
      <div>
        <h4> {title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increaseItem(id));
          }}
          className="amount-btn"
        >
          <ChevronUp></ChevronUp>
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decreaseItem(id));
          }}
          className="amount-btn"
        >
          <ChevronDown></ChevronDown>
        </button>
      </div>
    </article>
  );
}
