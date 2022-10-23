import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/ListView.module.css'
import { formatPrice } from '../utils/helpers'
import AddToCartButton from './AddToCartButton'
import Ratings from './Ratings'

const ListView = ({ products }) => {
  return (
    <section className={styles['products-container']}>
      {products.map((product) => {
        const { name, image, price, id, description, ratings, reviews } =
          product
        return (
          <div key={id} className={styles['product-wrapper']}>
            <img src={image} alt={name} />
            <div className={styles['info-wrapper']}>
              <h4 className={styles.name}>{name}</h4>
              <Ratings ratings={ratings} reviews={reviews} />
              <div className={styles['price-cart-wrapper']}>
                <h5 className={styles.price}>{formatPrice(price)}</h5>
                <AddToCartButton product={product} />
              </div>

              <p className={styles.description}>
                {description.substring(0, 250)}...
              </p>
              <button type='button' className={styles.btn}>
                <Link to={`/products/${id}`}>Info</Link>
              </button>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ListView
