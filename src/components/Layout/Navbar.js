import React, { useState } from 'react'
import '../../styles/Navbar.css'
import Modul from '../ListDetailModal'

export default function Navbar(props) {
  const [modul,setmodul]=useState(false)
  const handlecart=()=>{
    setmodul(previousState=> !previousState);
  }
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
                    
                <section className='cart' onClick={handlecart}>
                  <p>Cart <sup>{props.setcart}</sup> </p>
                  <i className="bi bi-cart-dash"></i>
                </section>
                {
                  modul && <Modul  onClose={handlecart}>
                    <div className="maining">
                      <div className="carted">
                        <div className="itmes">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDMowCqoTmZkE2wzN6ZeTMU5Sivor9W88Ct17cytbMg&s" alt="" />
                          <div className="heading">
                            <p className='modultitle'>Women wear</p>
                            <span className='amount'>
                            <p>₹200</p>
                            <strike>300</strike>
                            </span>
                          </div>
                          <div className='increase'>
                              <button >-</button>
                              <div>0</div>
                              <button >+</button>
                          </div>
                        </div>

                        <div className="itmes">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDMowCqoTmZkE2wzN6ZeTMU5Sivor9W88Ct17cytbMg&s" alt="" />
                          <div className="heading">
                            <p className='modultitle'>T-Shirt</p>
                            <span className='amount'>
                            <p>₹200</p>
                            <strike>300</strike>
                            </span>
                          </div>
                          <div className='increase'>
                              <button >-</button>
                              <div>0</div>
                              <button >+</button>
                          </div>
                        </div>

                        <div className="itmes">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDMowCqoTmZkE2wzN6ZeTMU5Sivor9W88Ct17cytbMg&s" alt="" />
                          <div className="heading">
                            <p className='modultitle'>Cloath</p>
                            <span className='amount'>
                            <p>₹200</p>
                            <strike>300</strike>
                            </span>
                          </div>
                          <div className='increase'>
                              <button >-</button>
                              <div>0</div>
                              <button >+</button>
                          </div>
                        </div>

                        <div className="itmes">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDMowCqoTmZkE2wzN6ZeTMU5Sivor9W88Ct17cytbMg&s" alt="" />
                          <div className="heading">
                            <p className='modultitle'>Cloath</p>
                            <span className='amount'>
                            <p>₹200</p>
                            <strike>300</strike>
                            </span>
                          </div>
                          <div className='increase'>
                              <button >-</button>
                              <div>0</div>
                              <button >+</button>
                          </div>
                        </div>

                        <div className="itmes">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDMowCqoTmZkE2wzN6ZeTMU5Sivor9W88Ct17cytbMg&s" alt="" />
                          <div className="heading">
                            <p className='modultitle'>Cloath</p>
                            <span className='amount'>
                            <p>₹200</p>
                            <strike>300</strike>
                            </span>
                          </div>
                          <div className='increase'>
                              <button >-</button>
                              <div>0</div>
                              <button >+</button>
                          </div>
                        </div>

                        <div className="itmes">
                          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMDMowCqoTmZkE2wzN6ZeTMU5Sivor9W88Ct17cytbMg&s" alt="" />
                          <div className="heading">
                            <p className='modultitle'>Cloath</p>
                            <span className='amount'>
                            <p>₹200</p>
                            <strike>300</strike>
                            </span>
                          </div>
                          <div className='increase'>
                              <button >-</button>
                              <div>0</div>
                              <button >+</button>
                          </div>
                        </div>
                      </div>
                      <div className="footer">
                        <div className="amount">
                        <h6>Total Amount:</h6>
                        <pre>200<span>INR</span></pre>
                        
                        </div>
                        
                        <button>Order Now </button>
                      </div>
                    </div>
                  </Modul>
                }
            
            </div>
    </header>
  )
}
