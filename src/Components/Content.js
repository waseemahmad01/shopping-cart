import React from 'react';
import style from './Styles/Admin.module.css';
const Content = ({sr, item, stock, price, id, handleDelete, handleEdit}) =>{
    
    return(
        <tr>
            <td>{sr}</td>
            <td>{item}</td>
            <td>{stock}</td>
            <td>{price}</td>
            <td><button className={style.green} onClick={()=>handleEdit(id)}>Edit</button></td>
            <td><button className={style.red} onClick={()=>handleDelete(id)}>Delete</button></td>
        </tr>
    )
}
export default Content;