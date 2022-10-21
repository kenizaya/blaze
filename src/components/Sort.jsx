import React from 'react'
import { useFilteredContext } from '../context/filter_context'
import { BsFillGridFill, BsList } from 'react-icons/bs'
import styles from '../styles/Sort.module.css'

const Sort = () => {
  const {
    filteredProducts: products,
    gridView,
    setGridView,
    setListView,
    sort,
    updateSort,
  } = useFilteredContext()
  return (
    <section className={styles.section}>
      <div className={styles['btn-container']}>
        <button
          type='button'
          onClick={setGridView}
          className={gridView ? styles.active : null}
        >
          <BsFillGridFill />
        </button>
        <button
          type='button'
          onClick={setListView}
          className={!gridView ? styles.active : null}
        >
          <BsList />
        </button>
      </div>
      <p className={styles.p}>{products.length} Products Found</p>
      <hr />
      <form>
        <label className={styles.label} htmlFor='sort'>
          Sort by
        </label>
        <select
          name='sort'
          id='sort'
          className={styles['sort-input']}
          value={sort}
          onChange={updateSort}
        >
          <option value='price-low'>price (lowest)</option>
          <option value='price-high'>price (highest)</option>
          <option value='name-a'>name (a - z)</option>
          <option value='name-z'>name (z - a)</option>
        </select>
      </form>
    </section>
  )
}

export default Sort
