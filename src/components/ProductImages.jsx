import React from 'react'
import { useState } from 'react'
import cn from 'classnames'
import styles from '../styles/ProductImages.module.css'

const ProductImages = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0])
  return (
    <section>
      <img
        src={mainImage}
        alt='main dress'
        className={cn(styles.main, styles.img)}
      />
      <div className={styles.gallery}>
        {images.map((image, index) => {
          return (
            <img
              src={image}
              alt='placeholder'
              key={index}
              className={
                image === mainImage ? cn(styles.img, styles.active) : styles.img
              }
              onClick={() => setMainImage(image)}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProductImages
