import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom';


export default function SingleItem({product}) {
  const params= useParams()
  console.log(params);

  // eslint-disable-next-line
  const found = product.find(item=>{ return item.id == params.id})
 
    const rate= found?.rating.rate;
    const number= Math.round(rate)
    
    function getStars(rating) {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        if (rating - 1 < i) {
          stars.push(<span>☆</span>);
        } else {
          stars.push(<span>★</span>);
          
        }
      }
      return stars;
  
    }
    
 
  return (
    <div className='single-item'>
    <Helmet>
      <title>product {params.id} details</title>
    </Helmet>
     <h2>{found?.title}</h2>
     <figure>
     <img src={found?.image} alt="" />
    
     </figure>

     
     
      <p><b>count:</b>{found?.rating.count}</p>
      <div className='rate'>
        <h3>rate:</h3>
       <span>{getStars(number)}</span>

      </div>
     
     <b>description:</b>
     <p className='description'>{found?.description}</p>
     <div className='price-category'>
      <p><b>price:</b>{found?.price}</p>
      <p><b>category:</b>{found?.category}</p>
     </div>

     <p><Link to={'/'} className='link'>Home</Link></p>
    </div>
  )
}
