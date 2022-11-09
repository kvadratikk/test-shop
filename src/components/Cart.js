import React from 'react'
import { useState, useEffect } from 'react'

const Cart = ({ products, setProducts, setIsPopup }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      products.reduce((a, b) => {
        return a + b.count * parseFloat(b.price.slice(1))
      }, 0)
    )
  }, [products])

  return (
    <div className='cart'>
      <h2 className='title cart__title'>Cart</h2>
      <ul className='cart__list'>
        {products.map((product) => {
          const { name, price, count } = product
          return (
            <li className='cart__item' key={name}>
              <div>
                <h3 className='title cart__name'>{name}</h3>
                <p className='cart__info'>
                  {price} x {count}
                </p>
              </div>
              <button
                className='cart__delete'
                onClick={() => {
                  setProducts(products.filter((product) => product.name !== name))
                }}
              >
                Х
              </button>
            </li>
          )
        })}
      </ul>
      <p className='cart__total'>Total:¥ {total}</p>
      <button
        className='cart__checkout'
        onClick={() => {
          setProducts([])
          setIsPopup(true)
          setTimeout(() => {
            setIsPopup(false)
          }, 2000)
        }}
      >
        checkout
      </button>
    </div>
  )
}

export default Cart
