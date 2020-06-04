import React from 'react'
import './Item.css'
import { MdDeleteForever } from "react-icons/md";
import { IconContext } from "react-icons";

const Item = ({checked,id,date,value,crossItem,del}) => {
    return(
        <li className="ListItem" id={id}>
            <div className="TitleCont">
              <input type="checkbox"
                     checked={checked}
                     onChange={crossItem}
                     className="checkbox"
                />
             <p className={checked ? "Strike ToDoText" : "ToDoText"}>{value}</p> 
            </div>
            <span className="DateText">{date}</span>
            <MdDeleteForever size="1.5rem" color="green" onClick={del}/>
        </li>
    )
}

export default Item