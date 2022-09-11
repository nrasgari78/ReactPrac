import React, {useEffect, useState} from "react";
import Navbar from "../Navigation/Navbar/Navbar";
import ProductsList from "../ProductsList/ProductsList";
import axios from "axios";
import Post from "../post/Post";
const Layout=()=>{
    const [Productsstate,setcProductsstate]=useState({
        products: [{index: 1, title: 'name1', price: 123}, {index: 2, title: 'name2', price: 147}],
        showpro: false,

    })
    const [poststate,setpoststate]=useState([])

    const removeproductHandler=(key)=>{
        let newproducts= [...Productsstate.products.filter((res)=>res.index!==key)]
        setcProductsstate({products:newproducts})
    }

    const changeHandler=()=>{
    alert('eeeert')
     }
    const changeInputHandler=(event)=>{
        console.log('res',event.target.value)
    // let newproducts=  [...Productsstate.products.map((res)=> res['title'] = event.target.value)]
    //
    // setcProductsstate({products: newproducts})
}
    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
                console.log(res)
                //receive limited data
                // setpoststate(res.data)
                const limitedposts=res.data.splice(0,4)
                const udpatedposts= limitedposts.map((item)=>{
              return  { ...item,author:'narges'}


                })
                setpoststate(udpatedposts)
            })
        },[]
    )
    return(
    <div>
    <Navbar
        data={Productsstate.products}/>
        <ProductsList
            data={Productsstate.products}
            del={(key)=>removeproductHandler(key)}
            update={changeHandler}
            changeInput={changeInputHandler}
        />

        {poststate.map((item)=> {
            return (
            <Post
            title={item.title}
            author={item.author}
            key={item.id}/>)
             }
            )}

    </div>
    )
}
export default Layout
