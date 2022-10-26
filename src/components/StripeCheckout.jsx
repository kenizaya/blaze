import React from 'react'
import styles from '../styles/StripeCheckout.module.css'

const CheckoutForm = () => {
  return <h1>checkout form</h1>
}

const StripeCheckout = () => {
  return (
    <section className={styles.section}>
      <CheckoutForm />
    </section>
  )
}

export default StripeCheckout
