import { v4 as uuid } from 'uuid'

export const flipflops = [
  {
    id: uuid(),
    src: `${require('../assets/products/flipflops/beige-flip-flops.jpg')}`,
    name: 'Beige Flip-Flops',
    price: '18.99',
    qty: 0,
  },
  {
    id: uuid(),
    src: `${require('../assets/products/flipflops/black-flip-flops.jpg')}`,
    name: 'Black Flip-Flops',
    price: '23.99',
    qty: 0,
  },
  {
    id: uuid(),
    src: `${require('../assets/products/flipflops/brown-flip-flops.jpg')}`,
    name: 'Brown Flip-Flops',
    price: '21.99',
    qty: 0,
  },
]
