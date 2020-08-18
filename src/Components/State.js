import React, {createContext, useState, useEffect} from 'react';

export const State = createContext();

export const StateProvider = (props) =>{
    const [ListItems, setListItems] = useState([])
    const [fetch, setfetch] = useState(true)

    useEffect(()=>{
        localStorage.setItem('Item', JSON.stringify(ListItems));
    },[ListItems])
    if(fetch){
        setListItems(JSON.parse(localStorage.getItem('Item')));
        setfetch(false)
    }
    return(
        <State.Provider value={[ListItems, setListItems]}>
            {props.children}
        </State.Provider>
    );
}