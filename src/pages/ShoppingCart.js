import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import EachProductInCart from '../components/map/EachProductInCart';


export default function ShoppingCart({cart,setCart,count,setCount}) {
 



  return (
    <>
    <Helmet>
      <title>Shopping cart</title>
    </Helmet>
    <div className='shopping-cart'>
    
      {cart.map(item=>(
        <EachProductInCart item={item} key={item.id} cart={cart} setCart={setCart} count={count} setCount={setCount} />
        
      ))}
      <p>total:{cart.map(a => a.price).reduce((a, b) => a + b, 0).toFixed(2)}</p>
    </div>
    </>
  )
}
