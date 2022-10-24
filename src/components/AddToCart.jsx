import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context";
import styles from "../styles/AddToCart.module.css";
import AmountButtons from "./AmountButtons";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();
  const { stock, id, color } = product;
  const [amount, setAmount] = useState(1);

  const increase = () => {
    if (amount < stock) setAmount((prevAmount) => prevAmount + 1);
  };

  const decrease = () => {
    if (amount > 1) setAmount((prevAmount) => prevAmount - 1);
  };

  return (
    <section>
      {stock > 0 ? (
        <>
          {" "}
          <div className={styles.colors}>
            <span>Colors : </span>
            <button style={{ background: color }} className={styles.color}>
              <FaCheck color={color === "white" ? "black" : "#f7f7f7"} />
            </button>
          </div>
          <p className={styles.stock}>
            <span>Available : </span>
            {stock > 0 ? `${stock}` : "Out of stock"}
          </p>
          <div className={styles["amount-btn-wrapper"]}>
            <AmountButtons
              amount={amount}
              increase={increase}
              decrease={decrease}
            />
            <Link to="/cart">
              <button
                className={styles.btn}
                onClick={() => addToCart(id, color, amount, product)}
              >
                Add To Cart
              </button>
            </Link>
          </div>
        </>
      ) : (
        <Link to="/products">
          <button className={styles["browse-btn"]}>
            Browse other products
          </button>
        </Link>
      )}
    </section>
  );
};

export default AddToCart;
