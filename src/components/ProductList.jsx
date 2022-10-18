import styles from '../styles/Products.module.css'
import { useFilteredContext } from '../context/filter_context'
import { GridView } from '../components'

const ProductList = () => {
  const { filteredProducts: products } = useFilteredContext()
  return <GridView products={products} />
}

export default ProductList
