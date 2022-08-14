
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart';
import SingleItem from './pages/SingleItem';
import axios from "axios";
function App() {
const [product,setProduct] = useState([])
const [count,setCount] = useState(0)
  useEffect(()=>{
   axios
   .get('https://fakestoreapi.com/products')
   .then(response => setProduct(response.data))
   .catch(err=>{
    console.log(err);
   })
  },[])

  return (
   <>
   <NavBar count={count} />
      <Routes>
        
        <Route path='/' element={<Home product={product} />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='/product/:id' element={<SingleItem product={product} />} />
      </Routes>
      
  </>
    
  );
}

export default App;
