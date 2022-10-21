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
                      cat.toLowerCase() === category
                        ? cn(styles.active, styles.btn)
                        : styles.btn
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
                      name='color'
                      onClick={updateFilters}
                      data-color='all'
                      className={
                        color === 'all'
                          ? cn(styles['all-btn'], styles.active, styles.btn)
                          : styles.btn
                      }
                    >
                      All
                    </button>
                  )

                return (
                  <button
                    key={index}
                    style={{ background: col }}
                    onClick={updateFilters}
                    type='button'
                    name='color'
                    data-color={col}
                    className={`${
                      col === color
                        ? cn(styles.active, styles['color-btn'], styles.btn)
                        : cn(styles['color-btn'], styles.btn)
                    }`}
                  >
                    {color === col ? (
                      <FaCheck
                        color={
                          color === 'white' || color === 'beige'
                            ? '#222222'
                            : '#f7f7f7'
                        }
                      />
                    ) : null}
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

          <div className={cn(styles['form-control'])}>
            <h5>Availability</h5>

            <div className={styles.stock}>
              <label htmlFor='stock'>Include out of stock</label>
              <input
                type='checkbox'
                name='stock'
                id='stock'
                onChange={updateFilters}
                checked={stock}
                className={styles.checkbox}
              />
            </div>
          </div>
        </form>
        <button
          type='button'
          onClick={clearFilters}
          className={cn(styles['clear-btn'], styles.btn)}
        >
          Clear Filters
        </button>
      </div>
    </section>
  )
}

export default Filters
