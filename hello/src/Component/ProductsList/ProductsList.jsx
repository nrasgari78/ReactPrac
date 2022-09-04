import React, {useState} from "react";
import Product from "../Product/Product";
const ProductsList=()=>{

    const [Productsstate,setcProductsstate]=useState(
        [{index:1,title:'name1',price:123},{index:2,title: 'name2',price: 147}])
const removeproductHandler=(key)=>{
      let newproducts=  Productsstate.filter((res)=>res.index!==key)
      setcProductsstate(newproducts)
}
    return(
        <div>
            {Productsstate.map((item)=>{
            return    <Product
                    title={item.title}
                    price={item.price}
                    key={item.index}
                    remove={()=>removeproductHandler(item.index)}>yohoooooooooo</Product>
            })}

        </div>
    )
}
export default ProductsList
