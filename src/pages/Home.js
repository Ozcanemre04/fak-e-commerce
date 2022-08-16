import React from 'react'
import { Helmet } from 'react-helmet';
import Category from '../components/filter/Category';
import EachProduct from '../components/map/EachProduct';

export default function Home({product, handleCount,setCart,cart, setCategory,category}) {
  
  return (
      <>
        <Helmet>
            <title>Home</title>
        </Helmet>
       <Category setCategory={setCategory} product={product} /> 
       <div className='all-product'>

     {category?.map(item=>(
       
       <EachProduct key={item.id} item={item} handleCount={handleCount} setCart={setCart} cart={cart}/>
       ))}
       </div>
    </>
  )
}
