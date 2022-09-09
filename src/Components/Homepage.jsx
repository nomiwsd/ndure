import React from 'react'
import { Helmet } from 'react-helmet';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Categories from './Categories/Categories';
import {useState} from 'react'
function Homepage() {
  const [categories,setcategories]=useState([
    {
    title:'SHOP MEN',
    image1:'Assets/Men(1).jpg',
    image2:'Assets/Men(2).jpg',
    image3:'Assets/Men(3).png',
    buttontext:'VIEW ALL CATEGORIES',
    desc1:'SHOES',
    desc2:'APPAREL',
    desc3:'ACCESSORIES',
    linkto:'/'
  },
    {
    title:'SHOP WOMEN',
    image1:'Assets/Women(1).jpg',
    image2:'Assets/Women(2).gif',
    image3:'Assets/Women(3).png',
    buttontext:'VIEW ALL CATEGORIES',
    desc1:'SHOES',
    desc2:'APPAREL',
    desc3:'ACCESSORIES'
  },
  {
    title:'SHOP KIDS',
    image1:'Assets/Kids(1).png',
    image2:'Assets/Kids(2).jpg',
    image3:'Assets/Kids(3).jpg',
    buttontext:'VIEW ALL CATEGORIES',
    desc1:'SHOES',
    desc2:'BOYS',
    desc3:'GIRLS'
  },
  {
    title:'SALE',
    image1:'Assets/Sale(1).jpg',
    image2:'Assets/Sale(2).jpg',
    image3:'Assets/Sale(3).jpg',
    buttontext:'EXPLORE THE SALE',
    desc1:'MEN',
    desc2:'WOMEN',
    desc3:'KIDS'
  },
])

  return (
    <div>
      <Helmet>
        <title>Fashion For Every You -Ndure.com</title>
      </Helmet>
      <Header/>
     <Landing/>
     <Categories data={categories[0]}/>
     <Categories data={categories[1]}/>
     <Categories data={categories[2]}/>
     <Categories data={categories[3]}/>   
      </div>
  )
}

export default Homepage
