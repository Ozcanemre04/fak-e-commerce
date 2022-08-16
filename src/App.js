
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart';
import SingleItem from './pages/SingleItem';
import axios from "axios";
import './Sass/Home.scss'

function App() {
  //state
const [product,setProduct] = useState([])
const [count,setCount] = useState(0)
const [cart,setCart] = useState([])
const [category,setCategory] = useState([])


  //useEffect
useEffect(()=>{
   axios
   .get('https://fakestoreapi.com/products')
   .then(response => setProduct(response.data))
   .catch(err=>{
    console.log(err);
   })
  },[])
  useEffect(()=>{
    setCategory(product)
    
  },[product])

  

 
//function
 const handleCountClick =()=>{
  setCount( count + 1)
  
 }
 
  

  return (
   <>
   <NavBar count={count} />
      <Routes>
        
        <Route path='/' element={<Home product={product} handleCount={handleCountClick} setCart={setCart}  cart={cart} setCategory={setCategory} category={category}/>} />
        <Route path='/shopping-cart' element={<ShoppingCart cart={cart}  setCart={setCart} count={count} setCount={setCount} />} />
        <Route path='/product/:id' element={<SingleItem product={product} />} />
      </Routes>
      
  </>
    
  );
}

export default App;
