import React, { useContext } from 'react'
import { allProducts } from '../data/allProducts'
import GlobalContext from '../GlobalContext'
import styles from '../styles/FilterSidebar.module.css'

const FilterSidebar = () => {
  const { filterProducts } = useContext(GlobalContext)

  return (
    <div className={styles.sidebarContainer}>
      <p style={{ fontSize: '2rem' }}>Jackets</p>
      <ul>
        <li onClick={() => filterProducts('all')}>All Products</li>
        <li onClick={() => filterProducts('sweatshirts')}>Sweatshirts</li>
        <li onClick={() => filterProducts('jackets')}>Jackets</li>
        <li onClick={() => filterProducts('trousers')}>Trousers</li>
        <li onClick={() => filterProducts('flipflops')}>Flip-Flops</li>
      </ul>
    </div>
  )
}

export default FilterSidebar
