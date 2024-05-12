import React from 'react'
import '../styles/loader.css'
import ReactDOM from 'react-dom'
export const Backdrop=()=>{
    
    return (
        <div className='Loader'> </div>
    )
}
export default function Loader() {
  return (
   ReactDOM.createPortal(
    <>
        <Backdrop/>
        {/* <div className='Loader'> </div> */}
        <div className="loading">
            <h4>Loading</h4>
            <div className="dots  circle1"></div>
            <div className="dots circle2"></div>
            <div className="dots circle3"></div>
            <div className="dots circle4"></div>
        </div>
     </>
   ,
    document.getElementById("Loader-root")
   )
  
  )
}
