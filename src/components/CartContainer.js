import { useSelector } from "react-redux";
import CartItem from "./CartItem";

import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
export default function CartContainer() {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
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
          <button className="btn clear-btn" onClick={handleClick}>
            clear cart
          </button>
        </footer>
      </header>
    </section>
  );
}
