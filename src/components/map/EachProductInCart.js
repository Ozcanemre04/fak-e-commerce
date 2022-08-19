import React, { useEffect} from 'react'

export default function EachProductInCart({item,cart,setCart,count,setCount,setTotal}) {
 
 useEffect(()=>{
  setTotal(cart.reduce((total, item)=>total+(item.price*item.quantity),0))
 },[cart,count,setTotal])

    const handleDelete=(id)=>{
        const copyCart  =[...cart]
        const filter=copyCart.filter(del=>del.id !== id)
        setCart(filter)
        setCount(count - item.quantity)
      
    }
    
    const x= item?.rating.count

    const handleIncrease=()=>{
     if(item.quantity<x){   
      item.quantity += 1
       setCount(count + 1)
       }
      }
   const handleDecrease=()=>{
    if(item.quantity>1){
      item.quantity -=1
      setCount(count - 1)
    }
   }
  return (
    <div className='product-in-cart'>
      <img src={item?.image} alt="" />
      <p>{item?.title}</p>
      <p>{item?.userId}</p>
      <p>price:{item?.price}$</p>
      <div>
      <button className='decrease' onClick={()=>{handleDecrease()}}>-</button>
      <p id={item.id}>{item.quantity}</p>
      <button className='increase' onClick={()=>{handleIncrease()}}>+</button>
      </div>
      <b>total:{item?.price * item.quantity}$</b>
      <button className='cart-button' onClick={()=>{handleDelete(item.id)}}>Delete</button>
    </div>
  )
}

