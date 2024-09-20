import React, { useState, useEffect} from 'react'
import classes from './product.module.css'
import axios from 'axios'
import ProductCard from './ProductCard'
import Loader from '../Loader/Loader'
function Product() {
    
const[products, setproducts]=useState()
const[isLoading,setIsLoading]=useState(false)
useEffect(() => {
  // setIsLoading(true)
 axios.get('https://fakestoreapi.com/products')
 .then((res)=>{
    setproducts(res.data)
    setIsLoading(false)
 }).catch((err)=>{
    console.log(err)
    setIsLoading(false)
 })
}, [])
  return (
    <>
    {
      isLoading?(<Loader/>):(
        <section className={classes.products_container}>
        {
        products?.map((singleproduct)=>{
        return (
        <ProductCard product={singleproduct} renderadd={true}
        key ={singleproduct.id}/>)
        })
        }
    </section>
      )
    }
    </>
  )
}

export default Product;