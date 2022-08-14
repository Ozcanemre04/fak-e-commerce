import React from 'react'
import { Helmet } from 'react-helmet';
import EachProduct from '../components/EachProduct';

export default function Home({product}) {
    console.log(product);
  return (
      <>
        <Helmet>
            <title>Home</title>
        </Helmet>
     {product?.map(item=>(
       
     <EachProduct key={item.id} item={item}/>
))}
    </>
  )
}
