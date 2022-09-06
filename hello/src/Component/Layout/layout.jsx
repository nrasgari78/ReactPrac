import React, {useState} from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import ProductsList from "../ProductsList/ProductsList";
const Layout=()=>{
    const [Productsstate,setcProductsstate]=useState({
        products: [{index: 1, title: 'name1', price: 123}, {index: 2, title: 'name2', price: 147}],
        showpro: false
    })
    const removeproductHandler=(key)=>{
        let newproducts= [...Productsstate.products.filter((res)=>res.index!==key)]
        setcProductsstate({products:newproducts})
    }

const changeHandler=()=>{
alert('eeeert')
}
    return(
    <div>
    <Navbar
        data={Productsstate.products}
    />
        <ProductsList
            data={Productsstate.products}
            del={(key)=>removeproductHandler(key)}
            update={changeHandler}
        />
    </div>
    )
}
export default Layout
