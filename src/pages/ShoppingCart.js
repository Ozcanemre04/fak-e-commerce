import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import EachProductInCart from '../components/map/EachProductInCart';


export default function ShoppingCart({cart,setCart,count,setCount}) {
 const [total,setTotal] = useState()
  return (
    <>
    <Helmet>
      <title>Shopping cart</title>
    </Helmet>
    <div className='shopping-cart'>
      {cart.map(item=>(
        <EachProductInCart item={item} key={item.id} cart={cart} setCart={setCart} count={count} setCount={setCount} setTotal={setTotal} />
      ))}
      <p className='total-of-all-product'>total of all product:{total? total : 0} $</p>
    </div>
    </>
  )
}
