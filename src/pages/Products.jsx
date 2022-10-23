import { Filters, Sort, ProductList } from '../components'
import styles from '../styles/Products.module.css'

const Products = () => {
  return (
    <main className={styles.container}>
      <div className={styles.filters}>
        <Filters />
      </div>
      <div>
        <Sort />
        <ProductList />
      </div>
    </main>
  )
}

export default Products
