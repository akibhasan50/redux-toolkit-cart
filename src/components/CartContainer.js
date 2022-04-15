import { useSelector } from "react-redux";
import CartItem from "./CartItem";

import { useDispatch } from "react-redux";

import { openModal } from "../features/modal/modalSlice";
export default function CartContainer() {
  const { cartItems, total, amount } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>;
          })}
        </div>
        <footer>
          <hr></hr>
          <div className="cart-total">
            <h4>
              total <span>${total}</span>
            </h4>
          </div>
          <button
            className="btn clear-btn"
            onClick={() => dispatch(openModal())}
          >
            clear cart
          </button>
        </footer>
      </header>
    </section>
  );
}
