import React from "react";
import { Link } from "react-router-dom";
import { WishlistContent } from "../components";
import { useWishlistContext } from "../context/wishlist_context";
import styles from "../styles/Wishlist.module.css";

const Wishlist = () => {
  const { wishlist } = useWishlistContext();

  if (wishlist.length < 1) {
    return (
      <main className={styles.main}>
        <div className={styles.empty}>
          <h2>Your wishlist is empty</h2>

          <Link to="/products">
            <button type="button" className={styles.btn}>
              Browse Products
            </button>
          </Link>
        </div>
      </main>
    );
  }
  return (
    <main className={styles.main}>
      <WishlistContent />
    </main>
  );
};

export default Wishlist;
