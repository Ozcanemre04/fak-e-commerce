import React from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'

export default function SingleItem({product}) {
  const params= useParams()
  
  
  const found = product.find(item=>{ return item.id ==params.id})
  console.log(found);
  return (
    <>
    <Helmet>
      <title>product {params.id} details</title>
    </Helmet>
     <p>{found.title}</p>
    </>
  )
}
