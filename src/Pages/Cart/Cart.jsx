import React, { useContext } from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import { DataContext } from '../../Components/Dataprovider/Dataprovider'
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat'
import { Link } from 'react-router-dom'
import classes from './cart.module.css'

function Cart() {
  const [{basket,user},dispatch]=useContext(DataContext);
  let total=basket.reduce((amount,item)=>{
   return item.price*item.amount + amount
   },0)
  return (
    <LayOut>
       
      <section className={classes.wrapper}>
        <div className={classes.cart_wrapper}>
          <h2>Hello</h2>
          <h3>Your shoping basket</h3>
          <hr />
          {
            basket?.length==0?(<p>opps ! No items in your cart</p>):(basket?.map((item)=>{
            return
             (<ProductCard
            product={item}
            renderDesc={true}
            flex={true}
            renderadd={false}
            />
            )
            }
            )) 
        
            }
        </div>
        {
          basket?.length!==0&&(
                   <div className={classes.cart_subtotal}>
                    <div>
                      <p>Subtotal({basket?.length} items)</p>
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