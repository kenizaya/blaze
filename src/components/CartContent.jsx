import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { useCartContext } from "../context/cart_context";
import styles from "../styles/CartContent.module.css";
import { Columns, CartItem, CartTotal } from "../components";

const CartContent = () => {
  const { cart, clearCart } = useCartContext();
  return (
    <section className={styles.section}>
      <Columns />
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <hr />
      <div className={styles["link-container"]}>
        <Link to="/products">
          <button type="button" className={styles["link-btn"]}>
            Continue Shopping
          </button>
        </Link>

        <button
          type="button"
          className={cn(styles["link-btn"], styles["clear-btn"])}
          onClick={clearCart}
        >
          Remove All Items
        </button>
      </div>
      <CartTotal />
    </section>
  );
};

export default CartContent;
