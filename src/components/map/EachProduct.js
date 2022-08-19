import React from 'react'
import { Link } from 'react-router-dom';

export default function EachProduct({item,foundItem,handleClick}) {
  
  return (
    <div id={item.id}>
    <img src={item.image} alt="" />
    <h3><Link to={`/product/${item.id}`} className='link'>{item.title}</Link></h3>
    <p>{item.price}$</p>
    <p className='product-category'>category:<i>{item.category}</i></p>
    <button onClick={(e)=>{handleClick(e,item)}} disabled={foundItem(item)} className='add-button'>add to cart</button>
    </div>
  )
}
