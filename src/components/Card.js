import React from 'react'

const Card = ({ name, price, img, products, setProducts }) => {
  return (
    <li className='card'>
      <h3 className='card__name title'>{name}</h3>
      <img className='card__img' src={img} alt={name} />
      <div className='card__info'>
        <p className='card__price'>{price}</p>
        <button
          className='card__buy'
          onClick={() => {
            const curProduct = products.find((el) => el.name === name)

            if (curProduct) {
              curProduct.count++
              setProducts([...products])
            } else {
              setProducts([
                ...products,
                {
                  name,
                  price,
                  count: 1,
                },
              ])
            }
          }}
        >
          Buy
        </button>
      </div>
    </li>
  )
}

export default Card
