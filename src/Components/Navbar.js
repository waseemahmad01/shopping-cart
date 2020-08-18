import React from 'react';
import style from './Styles/Navbar.module.css';
import {Link} from 'react-router-dom';
const Navbar = (props) =>{

    const LinkStyle = {
        textDecoration:'none'
    }
    return(
        <div className={style.navbar}>
            <div className={style.logo}>
                logo
            </div>
            <ul className={style.ul}>
                <Link to="/" style={LinkStyle}>
                    <li className={style.li}>Home</li>
                </Link>
                <Link to="/admin" style={LinkStyle}> 
                    <li className={style.li}>Admin</li>
                </Link>
                <Link to="/cart" style={LinkStyle}>
                    <li className={style.li}><i className="fa fa-shopping-cart"></i></li>
                </Link>
            </ul>
        </div>
    )
}
export default Navbar;