import React from 'react'
import { Link } from 'react-router-dom';

export default function EachProduct({item, handleCount,setCart,cart}) {
  
  const handleClick = (e)=>{
    handleCount()
    if(item.id == e.target.parentElement.id){
      const cartCopy= [...cart]
      cartCopy.push(item)
      setCart(cartCopy)
    }
    
    
  }
  const find = cart.find((x)=>x.id===item.id)
  
 
  
  return (
    <div id={item.id}>
    <img src={item.image} alt="" />
    <h3><Link to={`/product/${item.id}`} className='link'>{item.title}</Link></h3>
    <p>{item.price}$</p>
    <p className='product-category'>category:<i>{item.category}</i></p>
    <button onClick={handleClick} disabled={find}>add to cart</button>
    </div>
  )
}
