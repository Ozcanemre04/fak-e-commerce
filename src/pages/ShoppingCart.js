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
        <EachProductInCart item={item} key={item.id} cart={cart} setCart={setCart} count={count} setCount={setCount} total={total} setTotal={setTotal} />
        
      ))}
       
      <p>total of all product:{total}</p>
    </div>
    </>
  )
}
