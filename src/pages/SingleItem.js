import React from 'react'
import { useContext } from 'react';
import { Helmet } from 'react-helmet'
import { Link, useParams } from 'react-router-dom';
import { ctx } from '../App';


export default function SingleItem() {
  const params= useParams()
 const {product,handleClick,foundItem} = useContext(ctx)

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
    <div className='single-item' id={found?.id}>
    <Helmet>
      <title>product {params.id} details</title>
    </Helmet>
     <h2>{found?.title}</h2>
     <figure>
     <img src={found?.image} alt="" />
      <figcaption><b>category: </b><p>{found?.category}</p></figcaption>
     </figure>
      <p><b>count:</b>{found?.rating.count}</p>
      <div className='rate'>
        <h3>rate:</h3>
       <span>{getStars(number)}</span>
      </div>
     <b>description:</b>
     <p className='description'>{found?.description}</p>
      <p><b>price:</b>{found?.price}</p>
      <button onClick={(e)=>{handleClick(e,found)}} disabled={foundItem(found)} className='add-button'>add</button>
      <p><Link to={'/'} className='link'>Home</Link></p>
    </div>
  )
}
