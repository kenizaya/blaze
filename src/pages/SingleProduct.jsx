import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'

const SingleProduct = () => {
  const { products } = useProductsContext()
  const { id } = useParams()

  const getSingleProduct = () => {
    const [singleProduct] = products.filter(
      (product) => product.id === Number(id)
    )
    return singleProduct
  }

  const { name, price, description, stock, stars, reviews, company, images } =
    getSingleProduct()
  console.log(name)
  return <div>SingleProduct</div>
}

export default SingleProduct
