import React from 'react'

export default function EachProductInCart({item,cart,setCart,count,setCount}) {
 
 
  
    
  


    const handleDelete=(id)=>{
      
      
        const copyCart  =[...cart]
        const filter=copyCart.filter(del=>del.id !== id)
        setCart(filter)
        setCount(count - 1)
    }
   
    
   
  return (
    <div className='product-in-cart'>
      <img src={item?.image} alt="" />
      <p>{item?.title}</p>
        
      <div>
        <p>price:{item?.price}</p>
        <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
      </div>
    </div>
  )
}

