import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js'
import { useCartContext } from '../context/cart_context'
import { useAuth0 } from '@auth0/auth0-react'
import { formatPrice } from '../utils/helpers'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/StripeCheckout.module.css'

const promise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)

const CheckoutForm = () => {
  const { cart, totalAmount, shippingFee, clearCart } = useCartContext()
  const { user } = useAuth0()
  const navigate = useNavigate()

  // Stripe
  const [succeded, setSucceded] = useState(false)
  const [error, setError] = useState(null)
  const [processing, setProcessng] = useState('')
  const [disabled, setDisabled] = useState(true)
  const [clientSecret, setClientSecret] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  const cardStyle = {
    style: {
      base: {
        color: '#32325d',
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: 'antialiased',
        fontSize: '16px',
        '::placeholder': {
          color: '#32325d',
        },
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  }
  return <h1>checkout form</h1>
}

const StripeCheckout = () => {
  return (
    <section className={styles.section}>
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </section>
  )
}

export default StripeCheckout
