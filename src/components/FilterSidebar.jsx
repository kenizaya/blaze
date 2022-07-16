import React, { useContext } from 'react'
import { allProducts } from '../data/allProducts'
import { sweatshirts } from '../data/sweatshirts'
import { jackets } from '../data/jackets'
import { trousers } from '../data/trousers'
import { flipflops } from '../data/flipflops'
import GlobalContext from '../GlobalContext'
import styles from '../styles/FilterSidebar.module.css'

const FilterSidebar = () => {
  const { setProducts } = useContext(GlobalContext)

  return (
    <div className={styles.sidebarContainer}>
      <ul>
        <li onClick={() => setProducts(allProducts)}>All Products</li>
        <li onClick={() => setProducts(sweatshirts)}>Sweatshirts</li>
        <li onClick={() => setProducts(jackets)}>Jackets</li>
        <li onClick={() => setProducts(trousers)}>Trousers</li>
        <li onClick={() => setProducts(flipflops)}>Flip-Flops</li>
      </ul>
    </div>
  )
}

export default FilterSidebar
