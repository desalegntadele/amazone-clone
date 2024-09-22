 import React, { useState ,useEffect} from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productURL } from '../../Api/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'

function ProductDetail() {
  const{productId}=useParams();
  //useParams is a React Router hook that allows you to access the parameters of the current route within your component
  const[product,setproduct]=useState({})
  //useState is a fundamental React Hook that allows you to add state to functional components.
  const[isLoading,setIsLoading]=useState(false)

  useEffect(() => {
    setIsLoading(true)
   axios.get(`${productURL}/products/${productId}`)
   .then((res)=>{
setproduct(res.data);
setIsLoading(false)
   }).catch((err)=>{
    console.log(err)
    setIsLoading(false)
   })
  }, [])
  return (
    <LayOut>
      {
        isLoading?(<Loader/>):<ProductCard
         product={product}
         flex={true}
         renderDesc={true}
         renderadd={true}
/>  
}
  </LayOut>
    
  )
}

export default ProductDetail