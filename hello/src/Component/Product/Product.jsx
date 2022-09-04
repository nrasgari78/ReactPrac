import React from "react";
import {useState} from "react";
import "./Product.css"
const Product=(props)=>{
  let  imgUrl="https://picsum.photos/200/300";
  const [countstate,setcountstate]=useState({count:5})
    const IncrementHandler=()=>{
        setcountstate({count: countstate.count+1})
    }
    const DecrementHandler=()=>{
        setcountstate({count: countstate.count-1})

    }

    return(
        <div>
        <span className='t1'>Count Number:{countstate.count}</span>
        <button onClick={IncrementHandler} >add</button>
        <button onClick={DecrementHandler} >remove</button>
        <img src={imgUrl} alt="" className="pic1" style={{borderRadius:'115px'}}></img>
        <p>{props.children}</p>
        <ul>
            <li className="li"> title={props.title} price={props.price}
            <button onClick={props.remove}>Delete</button>
            </li>
        </ul>

        </div>
    )



}
export default Product
