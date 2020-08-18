import React, {useContext, useState} from 'react';
import {State} from './State';
import style from './Styles/Admin.module.css';
import Content from './Content';
import uuid from 'uuid'
const Admin = () =>{

    const [ListItems, setListItems] = useContext(State);

    // Search bar controls

    const [search, setsearch] = useState('');

    const handleSearch = e =>{
        setsearch(e.target.value);
    }

    // Form Controls

    const [item, setitem] = useState('');
    const [url, seturl] = useState('');
    const [stock, setstock] = useState(0);
    const [price, setprice] = useState(0);
    const [id, setid] = useState(uuid());

    const handleItem = e =>{
        setitem(e.target.value);
    }
    const handleUrl = e =>{
        seturl(e.target.value);
    }
    const handleStock = e =>{
        if(e.target.value >= 0)
            setstock(e.target.value);
    }
    const handlePrice = e =>{
        if(e.target.value >= 0)
        setprice(e.target.value);
    }
    const handleSubmit = e =>{
        e.preventDefault();

        const myObj = {
            item:item,
            stock:stock,
            url:url,
            price:price,
            id:id
        }

        setListItems([...ListItems, myObj]);
        setvisible(false);
        setitem('');
        setstock(0);
        setprice(0);
        seturl('');
        setid(uuid());
        seteditable(false);
    }

    // display controls
    const [visible, setvisible] = useState(false);
    const [editable, seteditable] = useState(false);
    const handleShowCreateItem = () =>{
        setvisible(true);
    }
    const handleClose = () =>{
        setvisible(false);
        seteditable(false);
    }
    // Update Controls
    const handleEdit = id =>{
        const items = [...ListItems];
        const filteredItems = items.filter(c=>c.id !== id);
        setListItems(filteredItems);
        const filterItem = items.find(c=> c.id === id);
        console.log(filterItem);
        setvisible(true);
        setitem(filterItem.item);
        setstock(filterItem.stock);
        setprice(filterItem.price);
        seturl(filterItem.url);
        setid(filterItem.id);
        seteditable(true);
    }
    const handleDelete = id =>{
        const items = [...ListItems];
        const filteredItems = items.filter(c=>c.id !== id);
        setListItems(filteredItems);
    }

    const ItemsArray = [...ListItems];
    let srNo = 0;
    return(
        <div className={style.admin}>
            <div className={style.search}>
                <input type="text" placeholder="Enter Search here ...." onChange={handleSearch} value={search} className={style.input}/>
                <div className={style.btn}><i className="fa fa-search"></i></div>
            </div>
            <div className={style.container}>
                <div className={style.title}>
                    <h3>List Items</h3>
                    <div className={style.button}>
                        <i className="fa fa-plus" onClick={handleShowCreateItem}></i>
                    </div>
                </div>
                <div className={style.table}>
                    <table>
                        <thead>
                            <tr>
                                <th>Sr.</th>
                                <th>Item</th>
                                <th>Stock</th>
                                <th>Price</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ItemsArray.map(item=>{
                                    srNo++;
                                    if(item.item.toLowerCase().indexOf(search.toLowerCase()) === -1){ 
                                        return null;
                                    }else{
                                        return(
                                            <Content
                                            sr ={srNo}
                                            item = {item.item}
                                            stock = {item.stock}
                                            price = {item.price}
                                            key = {item.id}
                                            id = {item.id}
                                            handleDelete = {handleDelete}
                                            handleEdit ={handleEdit}
                                            />
                                        )
                                    }
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`${style.form} ${visible? style.show:null}`}>
                    <form>
                        <div className={style.header}>
                            <h3>{editable? 'Edit Item': 'Create Item'}</h3>
                            <i className="fa fa-close" onClick={editable? null:handleClose}></i>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <label htmlFor="Item">Item Name :</label>
                                    </td>
                                    <td>
                                        <input type="text" value={item} onChange={handleItem} id="Item" placeholder="Enter name of Item..."/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="url" >Item Url :</label>
                                    </td>
                                    <td>
                                        <input type="url" value={url} onChange={handleUrl} id="url" placeholder="Enter name of Item..."/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="price">Item Price :</label>
                                    </td>
                                    <td>
                                        <input type="number" value={price} onChange={handlePrice} id="price" placeholder="Enter price of Item..."/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <label htmlFor="stock">stock :</label>
                                    </td>
                                    <td>
                                        <input type="number" value={stock} onChange={handleStock} id="stock" placeholder="Enter stock..."/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        
                                    </td>
                                    <td>
                                        <input type="submit" className={style.bt} onClick={handleSubmit} value="Add Item"/>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </form>
            </div>
        </div>
    )
}
export default Admin;