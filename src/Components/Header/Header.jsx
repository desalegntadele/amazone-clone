
import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../../assets/images/united-state.png";
import classes from './Header.module.css';
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import LowerHeader from './LowerHeader';
import { DataContext } from '../Dataprovider/Dataprovider';

const Header = () => {
const [{ basket }, dispatch] = useContext(DataContext);
 console.log(basket)

  return (
    <section className={classes.fixed}>
    <section>
      <div className={classes.header_container}>
        <div className={classes.logo_container}>
          {/* Logo section */}
          <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="amazon logo" />
          </Link>
          {/* Delivery */}
          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className={classes.searchs}>
          {/* Search */}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search products" />
          <FaSearch size={25} />
        </div>

        {/* Other section */}
        <div className={classes.order_container}>
          <Link to="" className={classes.language}>
            <img src={logo} alt="" />
            <select name='' id=''>
              <option value="">EN</option>
            </select>
          </Link>
          <Link to="" className={classes.account_container}>
            <p>Sign In</p>
            <span>Account & Lists</span>
          </Link>
          {/* Orders */}
          <Link to="/Order">
            <p>Returns</p>
            <span>& Orders</span>
          </Link>
          {/* Cart */}
          <Link to="/Cart" className={classes.cart}>
            <BiCart size={35} />
            <span>{basket.length}</span>
          </Link>
        </div>
      </div>
    </section>
    <LowerHeader/>
    </section>
  );
}; 
export default Header;
