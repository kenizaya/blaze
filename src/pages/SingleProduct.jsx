import React from 'react'
import { Link, useParams } from 'react-router-dom'
import AddToCart from '../components/AddToCart'
import ProductImages from '../components/ProductImages'
import Ratings from '../components/Ratings'
import { useProductsContext } from '../context/products_context'
import { PLACEHOLDER_IMAGES } from '../data/PRODUCTS'
import styles from '../styles/SingleProduct.module.css'
import { formatPrice } from '../utils/helpers'

const SingleProduct = () => {
  const { products } = useProductsContext()
  const { id } = useParams()

  const getSingleProduct = () => {
    const [singleProduct] = products.filter(
      (product) => product.id === Number(id)
    )
    return singleProduct
  }

  const product = getSingleProduct()
  const { name, price, description, stock, ratings, reviews, image } = product

  return (
    <div>
      <Link to='/products'>Back to products</Link>
      <div>
        <ProductImages images={[image, ...PLACEHOLDER_IMAGES]} />
        <section>
          <h2>{name}</h2>
          <Ratings ratings={ratings} reviews={reviews} />
          <h5>{formatPrice(price)}</h5>
          <p>{description}</p>
          <p>
            <span>Available : </span>
            {stock > 0 ? 'In stock' : 'Out of stock'}
          </p>
          <hr />
          {stock > 0 && <AddToCart product={product} />}
        </section>
      </div>
    </div>
  )
}

export default SingleProduct
