import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom'

export default function SingleItem({product}) {
  const params= useParams()
  console.log(params);

  // eslint-disable-next-line
  const found = product.find(item=>{ return item.id == params.id})
 
  
 
  return (
    <div className='single-item'>
    <Helmet>
      <title>product {params.id} details</title>
    </Helmet>
     <h2>{found?.title}</h2>
     <figure>
     <img src={found?.image} alt="" />
    <figcaption><p><b>rate:</b>{found?.rating.rate}</p></figcaption>
     </figure>

     
     
      <p><b>count:</b>{found?.rating.count}</p>
     
     <b>description:</b>
     <p className='description'>{found?.description}</p>
     <div>
      <p><b>price:</b>{found?.price}</p>
      <p><b>category:</b>{found?.category}</p>
     </div>

     <p><Link to={'/'} className='link'>Home</Link></p>
    </div>
  )
}
