import { v4 as uuid } from 'uuid'

export const sweatshirts = [
  {
    id: uuid(),
    src: `${require('../assets/products/trousers/blue-solid-twill-trousers.jpg')}`,
    name: 'Blue Solid Twill Trousers',
    price: '23.99',
    qty: 0,
  },
  {
    id: uuid(),
    src: `${require('../assets/products/trousers/gray-skinny-fit-cargo-joggers.jpg')}`,
    name: 'Gray Skinny Fit Cargo Joggers',
    price: '27.99',
    qty: 0,
  },
  {
    id: uuid(),
    src: `${require('../assets/products/trousers/gray-solid-cotton-chinos.jpg')}`,
    name: 'Gray Solid Cotton Chinos',
    price: '24.99',
    qty: 0,
  },
  {
    id: uuid(),
    src: `${require('../assets/products/trousers/white-solid-twill-trousers.jpg')}`,
    name: 'White Solid Twill Trousers',
    price: '29.99',
    qty: 0,
  },
]
