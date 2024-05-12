import React from 'react'
import '../../styles/Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
        <div className='main'>
                <section className='logo'>
                    <p>Fake Online Shop</p>
                    <i className="bi bi-cart-dash"></i>
                </section>
                
                <section className='from'>
                    <input type="search" placeholder='Enter product name, category' />
                    <button type='submit'><i className="bi bi-search"></i></button>
                </section>
                    
                <section className='cart'>
                <p>Cart <sup>0</sup> </p>
                    <i className="bi bi-cart-dash"></i>
                </section>
                    
            
            </div>
    </header>
  )
}
