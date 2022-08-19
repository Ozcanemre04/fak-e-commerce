import React from 'react'
import { Helmet } from 'react-helmet';
import Category from '../components/filter/Category';
import EachProduct from '../components/map/EachProduct';

export default function Home({product,setCategory,category,handleClick,foundItem}) {
  
  return (
      <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Category setCategory={setCategory} product={product} /> 
        <div className='all-product'>
          {category?.map(item=>(
                 <EachProduct key={item.id} item={item} handleClick={handleClick} foundItem={foundItem}/>
          ))}
        </div>
    </>
  )
}
