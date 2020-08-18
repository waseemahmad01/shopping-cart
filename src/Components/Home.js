import React, {useContext, useState} from 'react';
import style from './Styles/Home.module.css';
import Cards from './Cards';
import {State} from './State';
const Home = () =>{
    const [ListItems, setListItems] = useContext(State);
    const [currentItems, setcurrentItems] = useState(0);
    const ItemsArray = [...ListItems];
    return(
        <div className={style.container}>
            {
                ItemsArray.map(item=>
                    <Cards
                    title = {item.item}
                    stock = {item.stock}
                    price = {item.price}
                    url = {item.url}
                    currentItems = {currentItems}
                    />
                )
            }
        </div>
    )
}
export default Home;