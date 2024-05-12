import React, { useState,useEffect } from 'react'
import List from '../components/Listitem/List'
import '../styles/Products.css'
import Loader from '../components/Loader'

const items =[
  {
    id:0,
    imgsrc:"https://m.media-amazon.com/images/I/71q-01HbzXL._SY879_.jpg",
    title:"Dhurvi Trendz",
    price:432,
    discountPrice:373,
    details:"Women Regular Fit Rayon Shirt",
    imgdetail:"this is a regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },

      {
        id : 3,
        imgsrc:"https://rukminim2.flixcart.com/image/1200/1200/xif0q/t-shirt/c/u/9/xxl-tbgblpolo-p29-tripr-original-imagy66sgwszy2fh.jpeg?q=70&crop=false",
        title:"TRIPR",
        price:432,
        discountPrice:379,
        details:"Men Solid Polo Neck Cotton Blend Beige, Black T-Shirt",
        imgdetail:"this is not regular used cloths"
      },
      {
        id : 4,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 5,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 6,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 7,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 8,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 9,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 10,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 11,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 12,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 13,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 1,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 1,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 1,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 1,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 1,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 1,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
        id : 1,
        imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
        title:"Funday Fashion",
        price:432,
        discountPrice:289,
        details:"Women's Denim Blend Standard Length Jacket",
        imgdetail:"this is not regular used cloths"
      },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },{
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },

  {
    id : 1,
    imgsrc:"https://m.media-amazon.com/images/I/81iiPvmfJvL._AC_UL480_FMwebp_QL65_.jpg",
    title:"Funday Fashion",
    price:432,
    discountPrice:289,
    details:"Women's Denim Blend Standard Length Jacket",
    imgdetail:"this is not regular used cloths"
  },
  ]

export default function Products({handleaddcart,handleremovecart}) {

  

  const [loader ,setloader]=useState(true);
  useEffect(()=>{
  setloader(false);
  return ;
  },[])

  const onadd=id=>{
    handleaddcart();
  }
  const onremove=id=>{
    handleremovecart();
  }
  return (
    <>
    <div  id='conatiner'>
          {/* <List data={items[1]} />
          <List data={items[0]}/> */}
          {/* we  used the map method */}
          {
            items.map((items)=>{
              return(<List key={items.id} data={items} onadd={onadd} onremove={onremove} />);
            })
          }
         
    </div>  
    {loader && <Loader/>}
    
    </>
    
  )
}
