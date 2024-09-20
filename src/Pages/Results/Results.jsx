import React, { useState } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productURL } from '../../Api/endPoints'
import { useEffect } from 'react'
import classes from './results.module.css'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
import product from '../../Components/Product/Product'
function Results() {
  const[Results,setResults]=useState([])
  const[isLoading,setIsLoading]=useState(false)
  let {categoryName}=useParams()
  // console.log(categoryName)
  useEffect(() => {
    setIsLoading(true)
  axios.get(`${productURL}/products/category/${categoryName}`)
  .then((res)=>{  
setResults(res.data) 
   setIsLoading(false)
// console.log(res.data)
  }).catch((err)=>{
    console.log(err);
    setIsLoading(false)
  })
  }, [])

  return (
      <LayOut>
        <section>
          <h1 style={{padding:"30px"}}>Results</h1>
          <p style={{padding:"30px"}}>category/{categoryName}</p>
          <hr/>
          {
            isLoading?(<Loader/>):(
          <div className={classes.product_container}>
            {
              Results.map((product)=>(
                <ProductCard key={product.id} 
                product={product}
                 renderDesc={true} 
                  renderadd={true}
                />
              
              ))}
          </div>
             )}
    </section>
    </LayOut>
  )
}

export default Results