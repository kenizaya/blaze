import React from 'react'
import { useFilteredContext } from '../context/filter_context'
import styles from '../styles/Filters.module.css'
import { getUniqueValues } from '../utils/helpers'

const Filters = () => {
  const {
    allProducts,
    updateFilters,
    filters: { text, category, color, minPrice, maxPrice, price },
  } = useFilteredContext()

  const categories = getUniqueValues(allProducts, 'category')
  const colors = getUniqueValues(allProducts, 'color')

  console.log(categories)
  console.log(colors)
  return (
    <section>
      <div className={styles.content}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles['form-control']}>
            <input
              type='text'
              name='text'
              placeholder='Search'
              className={styles['search-input']}
              value={text}
              onChange={updateFilters}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Filters
