require('dotenv').config()

const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY)

exports.handler = async function (event, context) {
  if (event.body) {
    const { totalAmount, shippingFee } = JSON.parse(event.body)

    const calculateOrderAmount = () => {
      return totalAmount + shippingFee
    }

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        description: 'Test Project',
        amount: calculateOrderAmount(),
        currency: 'inr',
      })

      return {
        statusCode: 200,
        body: JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      }
    }
  }

  return {
    statusCode: 200,
    body: 'Create Payment Intent',
  }
}
