import React from 'react';
import style from './Styles/Cards.module.css';
const Cards = ({title, url, stock, price, currentItems}) =>{

    return(
        <div className={style.container}>
            <div className={style.image}>
                <img src={url} alt="img"/>
            </div>
            <div className={style.about}>
                <h3>{title}</h3>
                <p>Price : {price} Rs.</p>
                <p>In stock : {stock}</p>
            </div>
            <div className={style.controls}>
                <div className={style.incart}>
                    <i className="fa fa-plus"></i>
                    <span className={style.span}>{currentItems}</span>
                    <i className="fa fa-minus"></i>
                </div>
                <button className={style.cart}><i className="fa fa-cart-plus"></i></button>
            </div>
        </div>
    )
}
export default Cards;