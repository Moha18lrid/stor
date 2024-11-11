import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import logo from '../asset/logo.png'
import cart from '../asset/cart_icon.png'

export const Navbar = () => {
    const [menu,setmenu] = useState("shop");
    return (
        <div className='navbar'>
            <div className="logo">
                <img src={logo} alt="" />
                <p>MY SHOP</p>
            </div>
            <ul className="categores">
                <li onClick={()=>{setmenu("shop")}} ><Link to='/' style={{textDecoration:'none' }}>Shop</Link>   {menu=="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("man")}} ><Link to='/men'style={{textDecoration:'none'}}>Man</Link>     {menu=="man"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Women")}} ><Link to='/Women'style={{textDecoration:'none'}}>Women</Link>      {menu=="Women"?<hr/>:<></>}</li>
                <li onClick={()=>{setmenu("Kids")}} ><Link to='/Kids'style={{textDecoration:'none'}}>Kids</Link>     {menu=="Kids"?<hr/>:<></>}</li>
            </ul>
            <div className="cart">
                <button>Login</button>
                <img src={cart} alt="" />
            </div>
        </div>
    )
}
export default Navbar;