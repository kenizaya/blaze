import { v4 as uuid } from 'uuid'

export const sweatshirts = [
  {
    id: uuid(),
    src: `${require('../assets/products/jackets/black-water-repellent-shell-jacket.jpg')}`,
    name: 'Black Water Repellent Shell Jacket',
    price: '31.99',
    qty: 0,
  },
  {
    id: uuid(),
    src: `${require('../assets/products/jackets/blue-regular-fit-teddy-jacket.jpg')}`,
    name: 'Blue Regular Fit Teddy Jacket',
    price: '29.99',
    qty: 0,
  },
  {
    id: uuid(),
    src: `${require('../assets/products/jackets/green-solid-regular-fit-softshell-jacket')}`,
    name: 'Green Solid Regular Fit Softshell Jacket',
    price: '33.99',
    qty: 0,
  },
  {
    id: uuid(),
    src: `${require('../assets/products/jackets/off-white-solid-teddy-lined-trucker-jacket.jpg')}`,
    name: 'Off White Solid Teddy Lined Trucker Jacket',
    price: '27.99',
    qty: 0,
  },
]
