import React,{useRef,useEffect} from "react";
import "./Product.css"
const Product=(props)=>{
    const focusInputRef=useRef(null)
    useEffect(()=>{
        focusInputRef.current.focus()
        },[]
    )

    return(
        <div>

        <p key="1">{props.children}</p>
        <ul key="2">
            <li className="li"> title={props.title} price={props.price}
            <button onClick={props.remove}>Delete</button>
            </li>
            <input ref={focusInputRef} type="text" onChange={props.InputUpdate} value={props.title}/>
        </ul>

        </div>
    )
}
export default Product
