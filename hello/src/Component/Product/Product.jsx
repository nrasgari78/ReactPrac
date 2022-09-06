import React from "react";
import "./Product.css"
const Product=(props)=>{

    return(
        <div>

        <p>{props.children}</p>
        <ul>
            <li className="li"> title={props.title} price={props.price}
            <button onClick={props.remove}>Delete</button>
            </li>
            <input onChange={props.InputUpdate}/>
        </ul>

        </div>
    )
}
export default Product
