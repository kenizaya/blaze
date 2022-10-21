import React from 'react'
import { useFilteredContext } from '../context/filter_context'
import cn from 'classnames'
import { FaCheck } from 'react-icons/fa'
import styles from '../styles/Filters.module.css'
import { formatPrice, getUniqueValues } from '../utils/helpers'

const Filters = () => {
  const {
    allProducts,
    updateFilters,
    clearFilters,
    filters: { text, category, color, minPrice, maxPrice, price, stock },
  } = useFilteredContext()

  const categories = getUniqueValues(allProducts, 'category')
  const colors = getUniqueValues(allProducts, 'color')

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

          <div className={styles['form-control']}>
            <h5>Category</h5>
            <div>
              {categories.map((cat, index) => {
                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='category'
                    className={`${
                      cat.toLowerCase() === category ? styles.active : null
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>

          <div className={styles['form-control']}>
            <h5>Colors</h5>
            <div className={styles.colors}>
              {colors.map((col, index) => {
                if (col === 'all')
                  return (
                    <button
                      key={index}
                      onClick={updateFilters}
                      data-color='all'
                      className={
                        color === 'all'
                          ? cn(styles['all-btn'], styles.active)
                          : null
                      }
                    >
                      All
                    </button>
                  )

                return (
                  <button
                    key={index}
                    onClick={updateFilters}
                    type='button'
                    name='color'
                    data-color={col}
                    className={`${
                      col === color
                        ? cn(styles.active, styles['color-btn'])
                        : styles['color-btn']
                    }`}
                  >
                    {color === col ? <FaCheck /> : null}
                  </button>
                )
              })}
            </div>
          </div>

          <div className={styles['form-control']}>
            <h5>Price</h5>
            <p className={styles.price}>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilters}
            />
          </div>

          <div className={cn(styles['form-control'], styles.stock)}>
            <h5>Availability</h5>
            <label htmlFor='stock'>Include out of stock</label>
            <input
              type='checkbox'
              name='stock'
              id='stock'
              onChange={updateFilters}
              checked={stock}
            />
          </div>
        </form>
        <button
          type='button'
          onClick={clearFilters}
          className={styles['clear-btn']}
        >
          Clear Filters
        </button>
      </div>
    </section>
  )
}

export default Filters
