import React from 'react'
import { useState } from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Cart from './components/Cart'
import data from './assets/data'

const App = () => {
  const [products, setProducts] = useState([])
  const [isPopup, setIsPopup] = useState(false)

  return (
    <>
      <Header />
      <main className='main'>
        <section className='home'>
          <div className='container'>
            <ul className='cards__list'>
              {data.map((product) => {
                const { name, price, img } = product
                return <Card price={price} name={name} img={img} key={name} products={products} setProducts={setProducts} />
              })}
            </ul>
            <Cart products={products} setProducts={setProducts} setIsPopup={setIsPopup} />
          </div>
        </section>
      </main>

      <div className='popup' style={isPopup ? { opacity: 1 } : { opacity: 0 }}>
        <p>Thank you for the purchase!</p>
      </div>
    </>
  )
}

export default App
