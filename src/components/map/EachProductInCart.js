import React, { useEffect} from 'react'

export default function EachProductInCart({item,cart,setCart,count,setCount,total,setTotal}) {
 
  

 useEffect(()=>{
  setTotal(cart.reduce((total, item)=>total+(item.price*item.quantity),0))
 },[cart,count,setTotal])
 console.log(total);

    const handleDelete=(id)=>{
      if(item.quantity > 1){
        item.quantity -= 1
        setCount(count - 1)
      }
      else{
        const copyCart  =[...cart]
        const filter=copyCart.filter(del=>del.id !== id)
        setCart(filter)
        setCount(count - 1)
      }
    }
    
   
    const x= item?.rating.count
    const handleClick=()=>{
     if(item.quantity<x){   

      item.quantity += 1
       setCount(count + 1)
      
     }
      
    }
   
  return (
    <div className='product-in-cart'>
      <img src={item?.image} alt="" />
      <p>{item?.title}</p>
      <p>{item?.userId}</p>
      <p>price:{item?.price}$</p>

      <p id={item.id}>quantity:{item.quantity}</p>
      <button className='cart-button' onClick={()=>{handleClick()}}>+</button>

      <div>
        <b>total:{item?.price * item.quantity}$</b>
        <button className='cart-button' onClick={()=>{handleDelete(item.id)}}>Delete</button>
      </div>
   
    </div>
  )
}

