
import { useEffect, useState,createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home'
import ShoppingCart from './pages/ShoppingCart';
import SingleItem from './pages/SingleItem';
import axios from "axios";
import './Sass/Home.scss'

export const ctx = createContext()
function App() {
  
  //state
const [product,setProduct] = useState([])
const [count,setCount] = useState(0)
const [cart,setCart] = useState([])
const [category,setCategory] = useState([])
  
const quantity = cart.map(item=>item.quantity)

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
    const storedcart = JSON.parse(localStorage.getItem('cart'))
    if(storedcart) setCart(storedcart);
    const storedcount = JSON.parse(localStorage.getItem('count'))
    if(storedcount) setCount(storedcount)
  },[])

  useEffect(()=>{
   localStorage.setItem('cart',JSON.stringify(cart))
  },[cart,quantity])


  useEffect(()=>{
   localStorage.setItem('count',JSON.stringify(count))
  },[count])


  useEffect(()=>{
    setCategory(product)
  },[product])

//function
 const handleCountClick =()=>{
  setCount( count + 1)
 }

 const handleClick = (e,thing)=>{
    handleCountClick()
  // eslint-disable-next-line
  if(thing.id == e.target.parentElement.id){
    const cartCopy= [...cart]
    cartCopy.push({...thing,'quantity':1})
    setCart(cartCopy)
  }
}
const foundItem =(thing)=>{
  const found= cart.find((x)=>x.id===thing.id)
  return found 
}
  return (
    <>
        <ctx.Provider value={{product,handleClick,foundItem}}>
   <NavBar count={count} />
      <Routes>
        <Route path='/shopping-cart' element={<ShoppingCart cart={cart}  setCart={setCart} count={count} setCount={setCount} />} />
        <Route path='/' element={<Home  setCategory={setCategory} category={category} />} />
        <Route path='/product/:id' element={<SingleItem  />} />
      </Routes>
      
        </ctx.Provider>
  </>
    
  );
}

export default App;
