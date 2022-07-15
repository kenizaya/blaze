import { v4 as uuid } from 'uuid'

export const sweatshirts = [
  {
    id: uuid(),
    src: `${require('../assets/products/sweatshirts/black-oversized-relaxed-cotton-sweatshirt.jpg')}`,
    name: 'Black Oversized Relaxed Cotton Sweatshirt',
    price: '21.99',
  },
  {
    id: uuid(),
    src: `${require('../assets/products/sweatshirts/gray-relaxed-fit-sweatshirt.jpg')}`,
    name: 'Gray Relaxed Fit Sweatshirt',
    price: '19.99',
  },
  {
    id: uuid(),
    src: `${require('../assets/products/sweatshirts/green-solid-round-neck-relaxed-fit-sweatshirt.jpg')}`,
    name: 'Green Solid Round Neck Relaxed Fit Sweatshirt',
    price: '23.99',
  },
  {
    id: uuid(),
    src: `${require('../assets/products/sweatshirts/brown-relaxed-fit-sweatshirt.jpg')}`,
    name: 'Brown Relaxed Fit Sweatshirt',
    price: '17.99',
  },
]
