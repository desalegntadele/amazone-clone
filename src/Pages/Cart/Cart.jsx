import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/Dataprovider/Dataprovider'
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import product from '../../Components/Product/Product'
import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";


import { Link } from 'react-router-dom'
import classes from './cart.module.css'
import { Type } from '../../Utility/action.type';

function Cart() {
  const [{basket,user},dispatch]=useContext(DataContext);
  let total=basket.reduce((amount,item)=>{
   return( item.price*item.amount + amount)
   },0)
    let increment=(item)=>{
      dispatch({
      type:Type.ADD_TO_BASKET,
      item,
      });
       }
      let decrement=(id)=>{
      dispatch({
        type:Type.REMOVE_FROM_BASKET,
        id,
      });
      };
   
  return (
    <LayOut>
       
      <section className={classes.wrapper}>
     
            <div className={classes.cart_wrapper}>
                    <h2>Hello</h2>
                    <h3>Your shopping basket</h3>
                    <hr />
                    {basket?.length==0? (
                        <p>Oops! No items in your cart</p>
                    ) : (
                        basket.map((item) => (
                            <section className={classes.cart_product}>
                                <ProductCard
                                    product={item}
                                    renderDesc={true}
                                    flex={true}
                                    renderadd={false}
                                />
                                <div className={classes.cbtn_container}>
                                    <button className={classes.btn} onClick={() => increment(item)}>
                                      <IoIosArrowDropup size={25}/>
                                    </button>
                                    <span>{item.amount}</span>
                                    <button className={classes.btn} onClick={() => decrement(item.id)}>
                                      <IoIosArrowDropdown size={25}/>
                                    </button>
                                </div>
                            </section>
                        ))
                    )}
                </div>
        {
          basket?.length!==0&&(
                   <div className={classes.cart_subtotal}>
                    <div>
                      <p>Subtotal({basket.length} items)</p>
                      <CurrencyFormat amount={total}/>
                    </div>
                    <span>
                      <input type="checkbox" />
                      <small>This order contain a gift</small>
                    </span>
                    <Link to ="/payments">continue to checkout</Link>
                   </div>
          )
        }
 
      </section>
    </LayOut>
    
  )
}

export default Cart