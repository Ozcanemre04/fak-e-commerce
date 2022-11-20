import React from 'react'

import { Helmet } from 'react-helmet';
import Category from '../components/filter/Category';
import EachProduct from '../components/map/EachProduct';

export default function Home({setCategory,category}) {
 
  return (
      <>
        <Helmet>
            <title>Home</title>
        </Helmet>
        <Category setCategory={setCategory} /> 
        <div className='all-product'>
          {category?.map(item=>(
                 <EachProduct key={item.id} item={item}/>
          ))}
        </div>
    </>
  )
}
