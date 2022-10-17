import Product from '../components/Product'
import styles from '../styles/Products.module.css'
// import GlobalContext from '../context/GlobalContext'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'

const Products = () => {
  const { products } = useProductsContext()
  // const { handleChange, handleIncrease, handleDecrease } =
  //   useContext(GlobalContext)

  return (
    <div className={styles['products-container']}>
      {products.map((product) => (
        <Product
          key={product.id}
          {...product}
          // onIncrease={(id) => handleIncrease(id)}
          // onDecrease={(id) => handleDecrease(id)}
          // onChange={(e, id) => handleChange(e, id)}
        />
      ))}
    </div>
  )
}

export default Products
