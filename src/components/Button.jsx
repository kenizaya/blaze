import React from 'react'

const Button = (props) => {
  const { className, onClick } = props
  return (
    <button type='button' className={className} onClick={onClick}>
      {props.text}
    </button>
  )
}

export default Button
