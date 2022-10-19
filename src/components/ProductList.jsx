import styles from '../styles/Products.module.css'
import { useFilteredContext } from '../context/filter_context'
import { GridView } from '../components'

const ProductList = () => {
  const { filteredProducts: products } = useFilteredContext()

  if (products.length < 1)
    return (
      <h3 style={{ letterSpacing: '1.1px' }}>
        Sorry, no products matched your criteria...
      </h3>
    )

  return <GridView products={products} />
}

export default ProductList
