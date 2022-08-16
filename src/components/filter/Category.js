import React from 'react'

export default function Category({product,setCategory}) {
 const handleCategory=(category)=>{
   const filter = product.filter(item=>item.category ===category)
   setCategory(filter)
 }

  return (
    <div className='category'>
      <button onClick={()=>setCategory(product)}>All</button>
      <button onClick={()=>handleCategory("men's clothing")}>men's clothing</button>
      <button onClick={()=>handleCategory("jewelery")}>jewelery</button>
      <button onClick={()=>handleCategory("electronics")}>electronics</button>
      <button onClick={()=>handleCategory("women's clothing")}>women's clothing</button>
    </div>
  )
}
