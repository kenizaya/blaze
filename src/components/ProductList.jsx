import { useFilteredContext } from '../context/filter_context'
import { GridView, ListView } from '../components'

const ProductList = () => {
  const { filteredProducts: products, gridView } = useFilteredContext()

  if (products.length < 1)
    return (
      <h3 style={{ letterSpacing: '1.1px' }}>
        Sorry, no products matched your criteria...
      </h3>
    )

  return gridView ? (
    <GridView products={products} />
  ) : (
    <ListView products={products} />
  )
}

export default ProductList
