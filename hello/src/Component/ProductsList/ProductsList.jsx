import React, { useState} from "react";
import Product from "../Product/Product";
const ProductsList=(props)=>{
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

            {props.data.map((item)=>{
            return  <Product
                    title={item.title}
                    price={item.price}
                    key={item.index}
                    remove={()=>props.del(item.index)}
                    InputUpdate={props.changeInput}
                                     >yohoooooooooo</Product>
            })}

        </div>
    )
}
export default ProductsList
