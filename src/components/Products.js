import React from 'react'
import List from '../components/Listitem/List'
import '../styles/Products.css'
const items =[
  {
    id:0,
    imgscr:"https://m.media-amazon.com/images/I/71q-01HbzXL._SY879_.jpg",
    title:"Dhurvi Trendz",
    price:432,
    discountPrice:373,
    details:"Women Regular Fit Rayon Shirt",
    imgdetail:"this is a regular used cloths"
  },
  {
    id : 1,
    imgscr:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  }
  ]

export default function Products() {
  return (
    

    <div  id='conatiner'>
          <List data={items[0]} />
          <List data={items[1]}></List>
          <List data={items[1]}></List>
         
    </div>
      
    
  )
}
