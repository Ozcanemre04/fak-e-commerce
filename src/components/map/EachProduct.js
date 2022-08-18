import React from 'react'
import { Link } from 'react-router-dom';

export default function EachProduct({item, handleCount,setCart,cart}) {
 
  const handleClick = (e)=>{
    handleCount();
    // eslint-disable-next-line
    if(item.id == e.target.parentElement.id){
      const cartCopy= [...cart]
      cartCopy.push({...item,'quantity':1})
      setCart(cartCopy)
    }
    
  }
  console.log(cart);
  const find = cart.find((x)=>x.id===item.id)
  
 console.log(item);
  
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
