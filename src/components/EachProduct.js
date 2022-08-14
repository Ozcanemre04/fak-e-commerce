import React from 'react'
import { Link } from 'react-router-dom';

export default function EachProduct({item}) {
  
  return (
    <div className={item.id}>
    <img src={item.image} alt="" />
    <h3><Link to={`/product/${item.id}`}>{item.title}</Link></h3>
    <p>{item.price}$</p>
    <p>category:<i>{item.category}</i></p>
    <button>add to cart</button>
    </div>
  )
}
