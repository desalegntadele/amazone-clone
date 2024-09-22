import React, { useContext } from 'react'
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
// import LayOut from '../LayOut/LayOut';
import classes from './product.module.css'
import { DataContext } from '../Dataprovider/Dataprovider';
import { Type } from '../../Utility/action.type';

function ProductCard({product,flex,renderDesc,renderadd}) {
    // console.log(product)
    const {image,title,id,rating,price,description}=product;
    // const {state,dispatch}=useContext(DataContext)
    const [{basket} ,dispatch] = useContext(DataContext);
// console.log(state)

   let addTocart = () => {
    dispatch({
        type: Type.ADD_TO_BASKET,
        item: product
    });
};
    const ratingCount = rating ? rating.count : 0; 
    const ratingValue = rating ? rating.rate : 0; 
      
  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed:''}`}>
        <Link to ={`/products/${id}`}>
        <img src={image} alt={title} className={classes.img_container} />
        </Link>
        <div>
            <h4>{title}</h4>
            {renderDesc && <div style={{maxWidth:"580px"}}>{description}</div>}
            <div className={classes.rating}>
                {/* rating */}
            <Rating value={ratingValue} precision={0.1}/>
                {/* count */}
                <small>{ratingCount}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>
            {
               
          renderadd && <button onClick={() => addTocart(product)} className={classes.button} >add to cart</button>
            
            }
        </div>
    </div>

  )
}

export default ProductCard;