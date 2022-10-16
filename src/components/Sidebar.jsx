import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { FaTimes } from 'react-icons/fa'
import cn from 'classnames'
import { links } from '../utils/constants'
import styles from '../styles/Sidebar.module.css'
import { Link } from 'react-router-dom'
import { CartLoginButtons } from '../components'
import { useProductsContext } from '../context/products_context'

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <aside
      className={
        isSidebarOpen
          ? cn(styles.sidebar, styles['show-sidebar'])
          : styles.sidebar
      }
    >
      <div className={styles['sidebar-header']}>
        <img src={logo} className={styles.logo} alt='logo' />
        <button
          className={styles['close-btn']}
          type='button'
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes />
        </button>
      </div>
      <ul className={styles.links}>
        {links.map(({ id, text, url }) => {
          return (
            <li key={id}>
              <Link to={url}>{text}</Link>
            </li>
          )
        })}
        <li>
          <Link to='/checkout'>Checkout</Link>
        </li>
      </ul>
      <CartLoginButtons className={styles['cart-login-wrapper']} />
    </aside>
  )
}

export default Sidebar
