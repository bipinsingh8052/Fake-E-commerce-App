import './App.css';
// import { useEffect } from 'react';
import Products from '../src/components/Products'
// import List from  '../src/components/Listitem/List'
import Navbar from './components/Layout/Navbar'
import Subheading from './components/Layout/SubHeader'
import { useState } from 'react';
import Footer from '../src/components/Layout/Footer'
// import Loader from '../src/components/Loader'
function App() {
  const [cart,setcart]=useState(0);
  // useEffect(()=>{
  //   // console.log("hello");
  //   return (()=>{
  //     console.log("delete the text");
  //   })
  // },[])
  const handleaddcart=()=>{
    setcart(cart+1);
  }
  const handleremovecart=()=>{
    setcart(cart-1);
  }
  return (
    <div>
      <Navbar setcart={cart}/>
      <Subheading/>
      <Products handleaddcart={handleaddcart} handleremovecart={handleremovecart} />
      <Footer/>
      {/* <Loader/> */}
      

    </div>
    // <div>
    //   <List/>
    //   <Products/>
    // </div>
  );
}

export default App;
