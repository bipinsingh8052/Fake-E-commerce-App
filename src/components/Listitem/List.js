import React, { Fragment,  useState } from 'react'
import '../../../src/styles/Lists.css'
import Modul from '../ListDetailModal'
export default function List({data,onadd,onremove}) {

    const [count,setcount]=useState(0);
    const [modul,setmodul]=useState(false)
    // const Addcart=()=>{
    //     // console.log("add the cart",data.discountPrice);
        
    // }
    const Decrese=()=>{
       if(count<0){
        return;
       }
       onremove();
        setcount(count-1);
       
    }
    const incrse=()=>{
        onadd();
        setcount(count+1);
    }
    
    const handlemodul=()=>{
        setmodul(previousState=> !previousState);
    }

  return (
    <Fragment>
        <div className='Cart ' >
        <div className="Header " onClick={handlemodul}  >
                <div className='conatiner '>
                    <div className="imgConatiner ">
                        <img src={data.imgsrc} alt={data.details} />
                    </div>
                    <div className="title">
                        <span>
                            <p>₹{data.discountPrice}</p>
                            <strike>{data.price}</strike>
                        </span>
                        <h5>{data.title}</h5>
                    </div>
                </div>
            </div>


            {/* conditional statements */}

            
        {    
            count>0?
            <div className='increase'>
                    <button onClick={Decrese}>-</button>
                    <div>{count}</div>
                    <button onClick={incrse}>+</button>
                </div>
                :
                <button  className='shoping' onClick={incrse}>
                    <span>Add to Cart</span>
                    <i className="bi bi-cart4"></i>
                </button>
                
            }
                
        </div>
     { modul && <Modul onClose={handlemodul}>
                <div className='Conatiner '>
                    <div className="imgConatinermodul ">
                        <img src={data.imgsrc} alt={data.details} />
                    </div>
                    <div className="titlemodul">
                        <h5>{data.title}</h5>
                        <span>
                            <p>₹{data.discountPrice}</p>
                            <strike>{data.price}</strike>
                        </span>
                        <div className="detail">
                          <p className='detailsmodul'>{data.details}</p>
                        </div>
                        {    
                            count>0?
                            <div className='increasemodul'>
                                    <button onClick={Decrese}>-</button>
                                    <div>{count}</div>
                                    <button onClick={incrse}>+</button>
                                </div>
                                :
                                <button  className='shoping' onClick={incrse}>
                                    <span>Add to Cart</span>
                                    <i className="bi bi-cart4"></i>
                                </button>
                        
                        }   
                    </div>
                </div>
        </Modul>}
   </Fragment>
  )
}

